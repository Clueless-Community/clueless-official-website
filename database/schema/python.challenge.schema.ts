import mongoose from "mongoose";

const participantsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  result_link: {
    type: String,
    required: true,
  },
  pass: {
    type: Boolean,
    required: true,
  },
});

const pythonSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  documentation_link: {
    type: String,
    required: true,
  },
  week: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  xp: {
    type: Number,
  },
  sol_link: {
    type: String
  },
  participants_no: {
    type: Number,
    required: true,
    default: 0
    },
  participants:participantsSchema
});

export default pythonSchema;
