import mongoose from "mongoose";
import CssChallengeSchema from "../schema/css.challenge.schema"

const CssChallenge = mongoose.model("CssChallenge", CssChallengeSchema);

export default CssChallenge