import * as accountServices from "../services/database/gameAccount.js";

function main(req, res, next) {
	res.send("hi my name is main");
}

export { main as default, main };