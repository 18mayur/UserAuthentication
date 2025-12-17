import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  team: String,
});
if (mongoose.connection.models["adminUsers"]) {
  delete mongoose.connection.models["adminUsers"];
}
export const adminModel =
  mongoose.models.adminUsers || mongoose.model("adminUsers", adminSchema);
