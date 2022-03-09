import mongoose from "mongoose";
import SponsorSchema from "../schema/sponsor.schema";

const Sponsor = mongoose.model("Sponsor", SponsorSchema);

export default Sponsor;
