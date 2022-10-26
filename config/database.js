const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://jsckhan:database@project-2.cvzweup.mongodb.net/?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const db = mongoose.connection;

db.on("connected", (err) => {
	console.log(`connected to MongoDB at ${db.host}:${db.port}`);
});

module.exports = {
	db,
};
