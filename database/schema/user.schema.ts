import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  gitHub_link: {
    type: String,
    required: true,
  },

  deployed_url: {
    type: String,
  },
});

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  college: {
    type: String,
  },
  gitHub_link: {
    type: String,
  },
  twitter_link: {
    type: String,
  },

  linkedIn_link: {
    type: String,
    required: true,
  },

  portfolio_link: {
    type: String,
  },
  blog_link: {
    type: String,
  },
  description: {
    type: String,
  },
  tech_stack: {
    type: Array,
  },
  xp: {
    type: Number,
    required: true,
    default: 0
  },
  level: {
    type: Number,
    required: true,
    default: 0
  },
  badges: {
    type: Array,
  },

  user_projects: projectSchema,
});

export default UserSchema;
