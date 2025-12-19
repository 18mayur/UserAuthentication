"use server";
import { headers } from "next/headers";
// const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function signupAction(prevState, formData) {
  const headerList = await headers();
  const origin = headerList.get("origin");
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");
  const team = formData.get("team");

  // console.log("", formData);
  console.log("username -", name);
  console.log("Email -", email);
  console.log("Password -", password);
  console.log("Role -", role);
  console.log("Team -", team);

  if (role === "Admin") {
    console.log("This a is for the admin routes");
    const res = await fetch(`${origin}/api/admins`, {
      method: "POST",
      body: JSON.stringify({ name, email, password, role, team }),
      headers: { "Content-Type": "application/json" },
    });
  } else {
    console.log("This is a for the User routes");
    const res = await fetch(`${origin}/api/Userdata`, {
      method: "POST",
      body: JSON.stringify({ name, email, password, role }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return {
    success: true,
    message: "username Updated",
  };
}
