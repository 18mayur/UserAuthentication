import { encrypt } from "./encryption/encrypt";
import { cookies } from "next/headers";

export async function CreateSession({ email, role }) {
  const expireAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  console.log("userData in session", email, role);

  const session = await encrypt({ email, role, expireAt });

  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expireAt,
    sameSite: "lax",
    path: "/",
  });
}
