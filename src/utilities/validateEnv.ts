import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

export default cleanEnv(process.env, {
  MONGO_CONNECTION_URL: str(),
  PORT: port(),
  //   SESSION_SECRET: str(),
  //   SESSION_MAX_AGE: str(),
});
