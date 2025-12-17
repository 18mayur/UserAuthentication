import mongoose from "mongoose";
import { connectionStr } from "@/lib/mogoose";
import { NextResponse } from "next/server";
import { adminModel } from "@/lib/model/adminUser";

export async function POST(req) {
  const body = await req.json();
  const { name, email, password, role, team } = body;

  await mongoose.connect(connectionStr);
  let NewAdminUser = new adminModel({
    name,
    email,
    password,
    role,
    team,
  });
  const res =await NewAdminUser.save();
  return NextResponse.json({ res, success: true });
}

