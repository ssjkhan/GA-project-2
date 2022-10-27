import * as riotAPI from "../server/services/RIOT/summoner.js";

async function runTests() {
	var summonerPUUID = await riotAPI.getID("Mango Revel");
}

export default runTests;
