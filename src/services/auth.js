import { connectMongoose } from "@/lib/mogoose";
import { UserModel } from "@/lib/model/user";
import { adminModel } from "@/lib/model/adminUser";

export async function loginUser(email, password) {
  await connectMongoose();

  const user = await UserModel.findOne({ email }).lean();

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  return user;
}

export async function loginAdmin(email, password) {
  await connectMongoose();

  const user = await adminModel.findOne({ email }).lean();

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  return user;
}
