import riotAPI from "./riotTests.js";
import database from "./databaseTests.js";

async function runTests() {
	// riotAPI();
	database();
}

export default runTests;
