import * as envConfig from "dotenv";
import mongoose, { connect } from "mongoose";

// init environment variables and load into memory
envConfig.config();
const MONGODB_URI = process.env.MONGODB_URI;

// init mongoose connection
async function connectDatabase() {
	try {
		mongoose.connection.on("connected", (err) => {
			console.log(
				`connected to MongoDB at ${mongoose.connection.host}:${mongoose.connection.port}\@${mongoose.connection.name}`
			);
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
