"use server";

export async function signupAction(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");

  console.log(formData);
  console.log("username -", name);
  console.log("Email -", email);
  console.log("Password -", password);
  console.log("Role -", role);

  if (role === "admin") {
    console.log("this is for the admin routes");
  } else {
    console.log("This is for the User routes");
  }
  const res = await fetch(
    "https://userauthentication-next.vercel.app/api/Userdata",
    {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    }
  );
  // const result = await res.json();
  // return {
  //   success: result.success,
  //   message: result.message,
  // };
  // if (username.length < 3) {
  //   return {
  //     success: false,
  //     message: "username must atleast more than 3 characters",
  //   };
  // }
  return {
    success: true,
    message: "username Updated",
  };
}
