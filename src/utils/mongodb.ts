import { MongoClient, Db } from 'mongodb';
import url from 'url';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let cachedDb: Db;
let cachedClient: MongoClient;

if (!uri) {
  throw new Error('Please, define the MONGO_URI environment inside .env.local');
}

if (!dbName) {
  throw new Error('Please, define the MONGO_DB environment inside .env.local');
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default connectToDatabase;
