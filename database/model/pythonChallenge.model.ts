import mongoose from "mongoose";
import PythonSchema from "../schema/python.challenge.schema"

const Python = mongoose.model("Python", PythonSchema);

export default Python;