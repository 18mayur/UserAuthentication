"use server";


import { createAdmin } from "@/services/adminUser";
import { createUser } from "@/services/user";
import { redirect } from "next/navigation";
// import { cookies } from "next/headers";

export async function signupAction(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");
  const team = formData.get("team");

  const UserData = { name, email, password, role };
  // const cookieStore= await cookies();
  // cookieStore.set(formData,{maxAge :5000, httpOnly: true})
  if (role === "Admin") {
    await createAdmin({ name, email, password, role, team });
  } else {
    await createUser({ name, email, password, role });
  }
  
  return {
    success: true,
    message: "Register successfully",
  };
}
