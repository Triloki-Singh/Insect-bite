import Insect from "../models/Insect.js";
import CheckHistory from "../models/checkHistory.js"


export const checkInsect = async (req, res) => {
    try {
        const { symptoms } = req.body;

        // Validate input
        if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
            return res.status(400).json({ message: "Please provide symptoms" });
        }

        // Normalize user symptoms (lowercase + trim)
        const userSymptoms = symptoms.map(s => s.toLowerCase().trim());

        const insects = await Insect.find();

        let bestMatch = null;
        let highestScore = 0;

        insects.forEach(insect => {
            // Normalize insect symptoms
            const insectSymptoms = insect.symptoms.map(s => s.toLowerCase());

            if (insectSymptoms.length === 0) return;

            // Count matches
            const matches = insectSymptoms.filter(symptom =>
                userSymptoms.includes(symptom)
            ).length;

            // Calculate score (percentage match)
            const score = (matches / insectSymptoms.length + matches / userSymptoms.length) / 2;

            if (score > highestScore) {
                highestScore = score;
                bestMatch = insect;
            }
        });

        // Require at least 40% match
        if (!bestMatch || highestScore < 0.4) {
            return res.json({
                message: "No clear match found",
                confidence: `${(highestScore * 100).toFixed(0)}%`
            });
        }

        await CheckHistory.create({
            user: req.user._id,
            symptomsEntered: userSymptoms,
            matchedInsect: bestMatch.name,
            confidence: `${(highestScore * 100).toFixed(0)}%`,
            dangerLevel: bestMatch.dangerLevel
        });

        const isHighRisk = bestMatch.dangerLevel === "High";

        return res.json({
            insect: bestMatch,
            confidence: `${(highestScore * 100).toFixed(0)}%`,
            ...(isHighRisk && {
                alert: "⚠ HIGH RISK - Seek medical attention if symptoms worsen."
            }),
            disclaimer: "This tool provides general guidance only and is not a medical diagnosis. Always consult a qualified healthcare professional for serious symptoms."
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// GET /api/insects/history
export const getHistory = async (req, res) => {
  try {
    const history = await CheckHistory.find({ user: req.user._id })
      .sort({ checkedAt: -1 });

    res.json(history);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


// Admin-only: Add insect
export const addInsect = async (req, res) => {
  try {
    const {
      name,
      symptoms,
      description,
      dangerLevel,
      suggestions
    } = req.body;

    if (!name || !symptoms || !dangerLevel) {
      return res.status(400).json({
        message: "Name, symptoms and dangerLevel are required"
      });
    }

    const insect = await Insect.create({
      name,
      symptoms,
      description,
      dangerLevel,
      suggestions
    });

    res.status(201).json(insect);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};