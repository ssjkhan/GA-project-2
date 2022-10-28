import * as envConfig from "dotenv";
envConfig.config();

const RIOT_API_KEY = process.env.RIOT_API_KEY;

console.log(RIOT_API_KEY);

export default RIOT_API_KEY;
