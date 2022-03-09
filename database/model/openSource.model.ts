import mongoose from "mongoose";
import OpenSouceSchema from "../schema/opensource.schema"

const OpenSouce = mongoose.model("OpenSouce", OpenSouceSchema);

export default OpenSouce;