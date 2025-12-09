import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "../../../lib/mogoose";
import { UserModel } from "@/lib/model/user";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await UserModel.find();
  console.log(data);

  return NextResponse.json({ result: data });
}
export async function POST(req) {
  const body = await req.json();
  const { name, email, password } = body;
  console.log("routes name ", name);
  await mongoose.connect(connectionStr);
  let newUser = new UserModel({
    name,
    email,
    password,
  });

  const result = await newUser.save();
  return NextResponse.json({ result, success: true });
}
