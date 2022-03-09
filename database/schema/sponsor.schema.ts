
import mongoose from "mongoose";

const sponsorSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true,
    },
    linkedin:{
        type:String,
    },
    twitter:{
        type:String,
    }

})
export default sponsorSchema