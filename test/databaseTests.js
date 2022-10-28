import Account from "../server/models/gameAccount.js";
import Player from "../server/models/player.js";
import Team from "../server/models/team.js";
import database from "../server/config/database.js";

async function newPlayer() {
	try {
		console.log("Trying to create new player");

		const newPlayer = await Player.create({ name: "Mango Revel" });

		await newPlayer.save();

		console.log("Saved player");
	} catch (error) {
		console.log(error);
	}
}

async function newAccount() {
	try {
		console.log("Trying to create a new accounter");

		const newAccount = await Account.create({ inGameName: "Mango Revel" });

		await newAccount.save();

		console.log("Saved account");
	} catch (error) {
		console.log(error);
	}
}

async function runTests() {
	try {
		await newPlayer();
		await newAccount();

		await newPlayer();
		await newAccount();
	} catch (error) {
		console.log(error);
	}
}

export default runTests;
