function main(req, res, next) {
	res.render("./team/index", { title: "DraftAtlas" });
}

async function newPlayer(req, res, next) {
	console.log(req.body);
	res.redirect("/team/");
}

export { main as default, main, newPlayer };
