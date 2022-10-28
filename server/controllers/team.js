import PlayerModel from "../models/player.js";

async function main(req, res, next) {
	const playersArr = await PlayerModel.find().lean().exec();

	res.render("./team/index", { title: "DraftAtlas", players: playersArr });
}

async function addPlayer(req, res, next) {
	console.log(req.body);
	try {
		await PlayerModel.create(req.body);
	} catch (error) {
		console.log(error);
	}
	res.redirect("/team");
}

async function deletePlayer(req, res, next) {
	var name = req.query.playerName.slice(1);

	try {
		await PlayerModel.deleteOne({ playerName: name });
	} catch (error) {
		console.log(error);
	}
	res.redirect("/team");
}

export { main as default, main, addPlayer, deletePlayer };
