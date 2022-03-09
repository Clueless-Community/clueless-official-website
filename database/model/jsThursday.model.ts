import mongoose from "mongoose";
import JsThursdaySchema from "../schema/js.thursday.schema"

const JsThursday = mongoose.model("JsThursday", JsThursdaySchema);

export default JsThursday