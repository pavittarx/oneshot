import Mongo, { MongoClient } from "mongodb";
import dotenv from "dotenv";

import { MONGO_DB_VAR } from "~/utils/constants";

dotenv.config();

const mongoClientOptions = {
  useUnifiedTopology: true,
};

const Client = new MongoClient(
  process.env.MONGO_DATASOURCE!,
  mongoClientOptions
);

process.on("exit", async () => {
  await Client.close();
});
  
async function connect() {
  return await Client.connect();
}

export const db = (async () => {
  console.log(MONGO_DB_VAR);

  return await (await connect()).db(MONGO_DB_VAR);
})();

export const client = connect();

export const mongo = Mongo;
