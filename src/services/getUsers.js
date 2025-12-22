import { connectMongoose } from "@/lib/mogoose";
import { UserModel } from "@/lib/model/user";
import { adminModel } from "@/lib/model/adminUser";

export async function getUsers() {
  await connectMongoose();

  const users = await UserModel.find().select("-password").lean();
  const admin = await adminModel.find().select("-password").lean();

  const allUsers = [...users, ...admin];

  return allUsers;
}
