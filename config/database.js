const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/DraftAtlasPrototype", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", (err) => {
	console.log(`connected to MongoDB at ${db.host}:${db.port}`);
});

module.exports = {
	db,
};
