import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
	inGameName: String,
	accountID: String,
	PUUID: String,
});

export default mongoose.model("account", accountSchema);
