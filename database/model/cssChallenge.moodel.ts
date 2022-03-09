import mongoose from "mongoose";
import CssChallengeSchema from "../schema/cssSunday.schema"

const CssChallenge = mongoose.model("CssChallenge", CssChallengeSchema);

export default CssChallenge