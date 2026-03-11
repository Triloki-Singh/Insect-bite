import mongoose from "mongoose";

const insectSchema = new mongoose.Schema({
  name: String,
  symptoms: [String],
  dangerLevel: String,
  suggestions: [String],
  emergencySigns: [String],
  seeDoctorWhen: [String]
});

export default mongoose.model("Insect", insectSchema);