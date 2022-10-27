function main(req, res, next) {
	res.render("./index", { title: "DraftAtlas" });
}

export { default as test } from "../routes/test.js";
export { default as team } from "../routes/team.js";
export { main as default, main };
