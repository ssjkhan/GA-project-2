import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
	name: String,
	team: String,
	summoners: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "gameAccount",
	},
});

const playerModel = mongoose.model("player", playerSchema);

export default playerModel;
export { playerModel };
