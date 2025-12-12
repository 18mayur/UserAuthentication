import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "../../../lib/mogoose";
import { UserModel } from "../../../lib/model/user";
// import { NewUserModel } from "@/lib/model/Newuser";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await UserModel.find();
  console.log(data);
  return NextResponse.json({ result: data, success: true });
}
// export async function POST(req) {
//   const body = await req.json();
//   const { name, email, password, role } = body;

//   await mongoose.connect(connectionStr);
//   let newUsers = new NewUserModel({
//     name,
//     email,
//     password,
//     role,
//   });

//   const result = await newUsers.save();
//   return NextResponse.json({ result, success: true });
// }
export async function POST(req) {
  const body = await req.json();
  const { name, email, password, role } = body;
  // if role == admin then post data to adminModal table else to  the userModal

  await mongoose.connect(connectionStr);
  let newUser = new UserModel({
    name,
    email,
    password,
    role,
  });

  const result = await newUser.save();
  return NextResponse.json({ result, success: true });
}
