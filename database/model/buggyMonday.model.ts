import mongoose from "mongoose";
import BuggyMondaySchema from "../schema/buggyMonday.schema"

const BuggyMonday = mongoose.model("BuggyMonday", BuggyMondaySchema);

export default BuggyMonday