import * as Player from "../services/database/player.js";
import PlayerModel from "../models/player.js";

async function main(req, res, next) {
	const playersArr = await PlayerModel.find().lean().exec();

	res.render("./team/index", { title: "DraftAtlas", players: playersArr });
}

async function addPlayer(req, res, next) {
	console.log(req.body);
	try {
		await Player.addPlayer(req.body.playerName, req.body.ROLE);

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

export { main as default, main, addPlayer, deletePlayer };
