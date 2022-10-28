import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
	players: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "player",
		},
	],
});

export default mongoose.model("team", teamSchema);
