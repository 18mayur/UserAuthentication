import { connectMongoose } from "@/lib/mogoose";
import { UserModel } from "@/lib/model/user";

export async function getUsers() {
  await connectMongoose();

  const users = await UserModel.find().select("-password").lean();

  return users;
}
