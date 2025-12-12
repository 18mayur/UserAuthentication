"use server";
import { UserModel } from "@/lib/model/user";
import { connectionStr } from "@/lib/mogoose";
import mongoose from "mongoose";
import { redirect } from "next/dist/server/api-utils";

export async function loginAction(prevState, formData2) {
  await mongoose.connect(connectionStr);

  const email = formData2.get("email");
  const password = formData2.get("password");
  console.log(formData2);
  // console.log("username -", name);
  console.log("Email -", email);
  console.log("Password -", password);

  let user = await UserModel.findOne({ email });
  user = JSON.parse(JSON.stringify(user));
  console.log("user ", user);
  if (!user) {
    return { success: false, message: "User not found" };
  }

  if (user.password !== password) {
    return { success: false, message: "Invalid password" };
  }


  return { success: true, user, message: "user verfied" };

  // // const res = await fetch("http://localhost:3000/api/Userdata", {
  // //   method: "POST",
  // //   body: JSON.stringify({ name, email, password }),
  // //   headers: { "Content-Type": "application/json" },
  // // });
  // const res = await fetch("http://localhost:3000/api/Signup", {
  //   method: "POST",
  //   body: JSON.stringify({ email, password }),
  //   headers: { "Content-Type": "application/json" },
  // });
  // // const result = await res.json();
  // // return {
  // //   success: result.success,
  // //   message: result.message,
  // // };
  // // if (username.length < 3) {
  // //   return {
  // //     success: false,
  // //     message: "username must atleast more than 3 characters",
  // //   };
  // // }
  // return {
  //   success: true,
  //   message: "Submited to signup",
  // };
}
