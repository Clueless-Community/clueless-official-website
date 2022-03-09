import mongoose from "mongoose";
import AdminSchema from "../schema/admin.schema"

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin