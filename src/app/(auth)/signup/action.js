"use server";

import { createAdmin } from "@/services/adminUser";
import { createUser } from "@/services/user";

export async function signupAction(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");
  const team = formData.get("team");

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
