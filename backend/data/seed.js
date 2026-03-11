import mongoose from "mongoose";
import dotenv from "dotenv";
import Insect from "../models/Insect.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Insect.deleteMany();

await Insect.insertMany([
  {
    name: "Mosquito",
    symptoms: ["itching", "small bump", "mild swelling", "redness"],
    dangerLevel: "Low",
    suggestions: [
      "Apply ice for 10 minutes",
      "Use anti-itch cream (calamine or hydrocortisone)",
      "Avoid scratching",
      "Keep area clean",
      "Take antihistamine if itching is severe"
    ],
    seeDoctorWhen: [
      "High fever develops",
      "Severe headache or body pain",
      "Rash spreads rapidly",
      "Signs of dengue or malaria symptoms"
    ],
    emergencySigns: ["Breathing difficulty", "Persistent vomiting"]
  },
  {
    name: "Bee",
    symptoms: ["pain", "swelling", "redness", "burning"],
    dangerLevel: "Medium",
    suggestions: [
      "Remove stinger carefully",
      "Wash area with soap and water",
      "Apply cold compress",
      "Take oral antihistamine",
      "Elevate affected area",
      "Use mild pain reliever"
    ],
    seeDoctorWhen: [
      "Swelling spreads beyond sting area",
      "Pain lasts more than 48 hours",
      "Multiple stings occurred",
      "Sting inside mouth or throat"
    ],
    emergencySigns: [
      "Breathing difficulty",
      "Severe facial swelling",
      "Dizziness or fainting",
      "Rapid heartbeat"
    ]
  },
  {
    name: "Wasp",
    symptoms: ["sharp pain", "swelling", "redness", "burning"],
    dangerLevel: "Medium",
    suggestions: [
      "Wash area immediately",
      "Apply ice pack",
      "Use antihistamine",
      "Take mild pain reliever",
      "Rest affected limb"
    ],
    seeDoctorWhen: [
      "Swelling continues increasing after 24 hours",
      "Severe pain persists",
      "More than one sting"
    ],
    emergencySigns: [
      "Chest tightness",
      "Difficulty breathing",
      "Throat swelling"
    ]
  },
  {
    name: "Spider",
    symptoms: ["redness", "pain", "burning", "blister"],
    dangerLevel: "Medium",
    suggestions: [
      "Clean area with antiseptic",
      "Apply cold compress",
      "Avoid squeezing blister",
      "Monitor for spreading redness",
      "Keep wound dry and clean"
    ],
    seeDoctorWhen: [
      "Blister becomes very large",
      "Pain increases significantly",
      "Fever develops",
      "Muscle cramps occur"
    ],
    emergencySigns: [
      "Severe muscle cramps",
      "Breathing difficulty",
      "Spreading infection signs"
    ]
  },
  {
    name: "Fire Ant",
    symptoms: ["intense pain", "burning", "pustule", "swelling"],
    dangerLevel: "Medium",
    suggestions: [
      "Wash area immediately",
      "Apply cold compress",
      "Do not pop pustule",
      "Apply hydrocortisone cream",
      "Take antihistamine"
    ],
    seeDoctorWhen: [
      "Large number of stings",
      "Swelling worsens after 24 hours",
      "Signs of infection"
    ],
    emergencySigns: [
      "Allergic reaction",
      "Breathing difficulty",
      "Severe swelling of face"
    ]
  },
  {
    name: "Tick",
    symptoms: ["small red spot", "itching", "rash", "fatigue"],
    dangerLevel: "High",
    suggestions: [
      "Remove tick carefully using tweezers",
      "Disinfect bite area",
      "Monitor for rash expansion",
      "Keep note of date of bite",
      "Watch for flu-like symptoms"
    ],
    seeDoctorWhen: [
      "Bullseye rash appears",
      "Joint pain develops",
      "High fever",
      "Persistent fatigue"
    ],
    emergencySigns: [
      "Severe headache",
      "Neck stiffness",
      "Confusion"
    ]
  },
  {
    name: "Bed Bug",
    symptoms: ["itching", "red bumps", "clustered bites"],
    dangerLevel: "Low",
    suggestions: [
      "Wash bedding in hot water",
      "Apply anti-itch cream",
      "Avoid scratching",
      "Clean mattress area",
      "Use protective covers"
    ],
    seeDoctorWhen: [
      "Bites become infected",
      "Severe allergic reaction",
      "Skin swelling increases"
    ],
    emergencySigns: ["Breathing difficulty"]
  },
  {
  name: "Centipede",
  symptoms: [
    "severe pain",
    "swelling",
    "redness",
    "burning",
    "two puncture marks",
    "localized numbness"
  ],
  dangerLevel: "Medium",
  suggestions: [
    "Wash area immediately with soap and water",
    "Apply cold compress for 15 minutes",
    "Elevate affected limb if swollen",
    "Take mild pain reliever",
    "Avoid scratching or rubbing area",
    "Keep area clean and dry"
  ],
  seeDoctorWhen: [
    "Pain lasts more than 24–48 hours",
    "Swelling spreads significantly",
    "Signs of infection appear (pus, warmth, redness spreading)",
    "Victim is a child, elderly, or immunocompromised"
  ],
  emergencySigns: [
    "Breathing difficulty",
    "Severe allergic reaction",
    "Rapid heart rate",
    "Dizziness or fainting"
  ]
}
]);

console.log("Seeded successfully");
process.exit();