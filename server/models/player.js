import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
	name: String,
	team: String,
	summoners: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "gameAccount",
	},
});

const playerModel = mongoose.model.apply(playerSchema, "player");

export default playerModel;
export { playerModel };
