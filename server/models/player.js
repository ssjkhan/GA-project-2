import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
	name: String,
	role: String,
	team: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "team",
	},
});

const playerModel = mongoose.model("player", playerSchema);

export default playerModel;
export { playerModel };
