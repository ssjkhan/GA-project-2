import apiKey from "../../config/riotKey.js";
import axios from "axios";
import { token } from "morgan";

const rootURL = "https://na1.api.riotgames.com";
const rootSummoner = "/lol/summoner/v4/summoners/by-name/";

async function getPUUID(name) {
	try {
		var url = rootURL + rootSummoner + name.replace(" ", "%20");

		var res = await axios({
			method: "get",
			url: url,
			headers: {
				"X-Riot-Token": "RGAPI-d9934a7a-fa4f-4982-b94a-cbedc5927531",
			},
		});

		return res.data;
	} catch (error) {
		console.log("RIOT API Error");
		console.log(error);
	}
}
async function getData(id) {
	return 0;
}

export { getPUUID as getID, getData };
