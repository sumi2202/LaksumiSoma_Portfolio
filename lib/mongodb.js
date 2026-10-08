import { MongoClient } from "mongodb";

let clientPromise;

export function getDb() {
  if (!clientPromise) {
    clientPromise = new MongoClient(process.env.MONGODB_URI).connect();
  }
  return clientPromise.then((client) => client.db("portfolio"));
}