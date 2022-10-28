import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
	players: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "player",
		},
	],
	team: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "team",
	},
});

export default mongoose.model("team", teamSchema);
