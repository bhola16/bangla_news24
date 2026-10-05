import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL;

if (!uri) {
  throw new Error("MONGODB_URL is missing");
}

const client = new MongoClient(uri);

const db = client.db("bangla-news-24");

try {
  await client.connect();
  console.log("✅ MongoDB connected for Better Auth");
} catch (error) {
  console.error("❌ MongoDB connection failed:", error);
}

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },
});
