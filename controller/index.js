function main(req, res, next) {
	res.render("./index", { title: "DraftAtlas" });
}

module.exports = {
	main: main,
};
