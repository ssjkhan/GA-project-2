function main(req, res, next) {
	res.render("./team/index", { title: "DraftAtlas" });
}

function getPlayer(req, res, next) {
	var nextRoute = "/player/:" + req.params.playerID;
	res.redirect(nextRoute);
}

export { main as default, main, getPlayer as players };
