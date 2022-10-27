import * as riotAPI from "../server/services/RIOT/summoner.js";

async function getSummonerID(name) {
	var summonerPUUID = await riotAPI.getID(name);
}

async function runTests() {
	var name = "Mango Revel";
	var res = await getSummonerID(name);

	console.log(
		`Getting summoner account info for ${name} and result \n ${JSON.stringify(
			res
		)}}`
	);
}

export default runTests;
