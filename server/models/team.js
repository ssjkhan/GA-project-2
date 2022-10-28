import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
	teamName: String,
	players: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "player",
			default: null,
		},
	],
});

export default mongoose.model("team", teamSchema);
