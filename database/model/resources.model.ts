import mongoose from "mongoose";
import ResourcesSchema from "../schema/resources.schema"

const Resources = mongoose.model("Resources", ResourcesSchema);

export default Resources