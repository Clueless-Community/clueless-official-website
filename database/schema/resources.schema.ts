import mongoose from "mongoose";

const infoSchema = new mongoose.Schema({

      name: {
        type: String,
        required: true,
      },
      link:{
          type:String,
          required:true
      },
      image: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      contributor:{
          type:String,
          required:true
      },
      social_link:{
        type:String,
      }
})
const resourcesSchema = new mongoose.Schema({
    webdev:infoSchema,
    aiml:infoSchema,
    python:infoSchema,
    web3:infoSchema,
    uiux:infoSchema,
    appdev:infoSchema,

})

export default resourcesSchema