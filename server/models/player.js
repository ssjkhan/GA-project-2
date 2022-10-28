import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
	playerName: String,
	ROLE: String,
	team: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "team",
		default: null,
	},
});

const playerModel = mongoose.model("player", playerSchema);

export default playerModel;
export { playerModel };
