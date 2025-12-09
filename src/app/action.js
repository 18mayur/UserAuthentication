"use server";

export async function action(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(formData);
  console.log("username -", name);
  console.log("Email -", email);
  console.log("Password -", password);

  // const res = await fetch("http://localhost:3000/api/Userdata", {
  //   method: "POST",
  //   body: JSON.stringify({ name, email, password }),
  //   headers: { "Content-Type": "application/json" },
  // });
  const res = await fetch(
    "http://userauthentication-next.vercel.app/api/Userdata",
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
