
import { connectMongoose } from "@/lib/mogoose";
import { adminModel } from "@/lib/model/adminUser";

export async function createAdmin(data) {
  await connectMongoose();

  return await adminModel.create(data);
}