import mongoose from "mongoose";
import UserSchema from "../schema/user.schema";

const User = mongoose.model("User", UserSchema);

export default User