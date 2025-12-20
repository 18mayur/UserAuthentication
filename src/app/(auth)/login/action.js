"use server";

import { loginAdmin, loginUser } from "@/services/auth";

export async function loginAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");
  console.log("details :- ", email, password, role);
  try {
    let account;

    if (role === "admin") {
      account = await loginAdmin(email, password);
    } else {
      account = await loginUser(email, password);
    }

    return {
      success: true,
      user: account,
      message: "Login successful",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
