
import { connectMongoose } from "@/lib/mogoose";
import { UserModel } from "@/lib/model/user";

export async function createUser(data) {
  await connectMongoose();

  return await UserModel.create(data);
}