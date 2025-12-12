import mongoose from "mongoose";

const newUserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});
export const NewUserModel =
  mongoose.models.newUsers || mongoose.model("newUsers", newUserSchema);
