import { encrypt } from "./encryption/encrypt";
import { cookies } from "next/headers";

export async function CreateSession({ userData }) {
  const expireAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  console.log("userData in session", userData);
  const session = await encrypt({ userData, expireAt });

  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expireAt,
    sameSite: "lax",
    path: "/",
  });
}
