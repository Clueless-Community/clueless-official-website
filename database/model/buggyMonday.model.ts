import mongoose from "mongoose";
import BuggyMondaySchema from "../schema/buggy.monday.schema"

const BuggyMonday = mongoose.model("BuggyMonday", BuggyMondaySchema);

export default BuggyMonday