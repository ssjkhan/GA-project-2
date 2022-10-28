import * as Player from "../services/database/player.js";
import PlayerModel from "../models/player.js";

function main(req, res, next) {
	res.render("./team/index", { title: "DraftAtlas" });
}

async function addPlayer(req, res, next) {
	console.log(req.body);
	try {
		const newPlayer = await Player.addPlayer(req.body);

		await PlayerModel.create(req.body);
	} catch (error) {
		console.log(error);
	}
	res.redirect("/team");
}

async function deletePlayer(req, res, next) {
	console.log(req.body);

	try {
	} catch (error) {
		console.log(error);
	}
	res.redirect("/team");
}

export { main as default, main, addPlayer };
