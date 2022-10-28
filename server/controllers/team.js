import Player from "../models/player.js";
import team from "../models/team.js";
import Team from "../models/team.js";

async function main(req, res, next) {
	const playersArr = await Player.find().lean().exec();

	res.render("./team/index", { title: "DraftAtlas", players: playersArr });
}

async function addPlayer(req, res, next) {
	var teamName = req.body.teamName;
	var playerName = req.body.playerName;
	var role = req.body.ROLE;

	try {
		var playerDoc = new Player({
			playerName: playerName,
			ROLE: role,
			team: null,
		});

		var allPlayers = await Player.find({}).exec();

		var teamDoc = await Team.find({ teamName: teamName }).exec();

		if (teamDoc.length === 0) {
			teamDoc = new Team({ teamName: teamName });
		}

		playerDoc.team = teamDoc._id;
		teamDoc.players.push(playerDoc._id);

		await playerDoc.save();
		await teamDoc.save();
	} catch (error) {
		console.log(error);
	}
	res.redirect("/team");
}

async function deletePlayer(req, res, next) {
	var name = req.query.playerName.slice(1);

	try {
		await Player.deleteOne({ playerName: name });
	} catch (error) {
		console.log(error);
	}
	res.redirect("/team");
}

export { main as default, main, addPlayer, deletePlayer };
