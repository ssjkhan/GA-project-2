import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
	name: String,
	role: String,
});

export default mongoose.model("gameAccount", accountSchema);
