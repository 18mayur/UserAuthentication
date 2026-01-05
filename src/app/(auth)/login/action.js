"use server";
import { CreateSession } from "@/lib/session";
import { loginAdmin, loginUser } from "@/services/auth";
// import { redirect } from "next/navigation";

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
    await CreateSession({
        email: email,
        role: role,
    });
    return {
      success: true,
      message: "Login successful",
    };
    // redirect("/home");
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
