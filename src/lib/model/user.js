import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});
if (mongoose.connection.models["userdatas"]) {
  delete mongoose.connection.models["userdatas"];
}
export const UserModel =
  mongoose.models.userdatas || mongoose.model("userdatas", userSchema);

// mongoose.model.userdata ---> This is to check where model is already exist or not
