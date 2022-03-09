import mongoose from "mongoose";
import JsThursdaySchema from "../schema/jsThursday.schema"

const JsThursday = mongoose.model("JsThursday", JsThursdaySchema);

export default JsThursday