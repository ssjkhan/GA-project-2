import mongoose from "mongoose";

// const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
	inGameName: String,
	accountID: String,
	PUUID: String,
});

export default mongoose.Model(accountSchema);
