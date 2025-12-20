import mongoose from "mongoose";

const DbUserName = process.env.DB_USERNAME;
const DbPassword = process.env.DB_PASSWORD;

export const connectionStr = `mongodb+srv://${DbUserName}:${DbPassword}@cluster0.fn6b8gc.mongodb.net/UserAuth`;
// export const connectionStr =
//   "mongodb+srv://mayu_db_user:ug9YIwpSrpNWDai1@cluster0.fn6b8gc.mongodb.net/UserAuth";
let isConnected = false;

export async function connectMongoose() {
  if (isConnected) return;

  await mongoose.connect(connectionStr);
  isConnected = true;
}