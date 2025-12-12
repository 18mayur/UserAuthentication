import mongoose from "mongoose";
import { connectionStr } from "@/lib/mogoose";
import { UserModel } from "@/lib/model/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  //   await mongoose.connect(connectionStr);
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  return NextResponse.json({ res: user, success: true });
}
