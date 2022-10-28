import Player from "../../models/team.js";

// add a player doc to the database
async function addPlayer(playerName, role) {
	try {
		await Player.create({ playerName: playerName, ROLE: role });
	} catch (error) {
		console.log(error);
	}
}

// remove a player doc from the database
async function deletePlayer(req, res, next) {
	console.log(req.body);
}

export { deletePlayer, addPlayer };
