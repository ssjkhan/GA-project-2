import * as envConfig from "dotenv";
import mongoose from "mongoose";

// init environment variables and load into memory
envConfig.config();
const MONGODB_URI = process.env.MONGODB_URI;

// init mongoose connection
async function connectDatabase() {
	try {
		var db = mongoose.connection;

		db.on("connected", (err) => {
			console.log(`connected to MongoDB at ${db.host}:${db.port}`);
		});

		await mongoose.connect(MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (error) {
		console.log(error);
	}
}

await connectDatabase();

export default mongoose.connection;
