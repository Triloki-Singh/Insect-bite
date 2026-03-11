import mongoose from "mongoose";

const checkHistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  symptomsEntered: [String],
  matchedInsect: String,
  confidence: String,
  dangerLevel: String,
  checkedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("CheckHistory", checkHistorySchema);