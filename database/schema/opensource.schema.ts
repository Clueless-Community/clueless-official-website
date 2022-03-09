import mongoose from "mongoose";


const opensourceSchema = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
  },
  repo_url: {
    type: String,
    required: true,
  },
  tech_stack: {
    type: Array,
    required: true,
  },
  admin_name: {
    type: String,
    required: true,
  },
  admin_email: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
  },

  description: {
    type: Array,
  },
});
export default opensourceSchema;
