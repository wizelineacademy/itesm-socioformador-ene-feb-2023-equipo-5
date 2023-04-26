// app/services/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";

// export the whole sessionStorage object
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "SmartSpeak",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: ["SECRETS"], //Here should be a secret, i dont know what that means
    secure: process.env.NODE_ENV === "production",
  },
});

// you can also export the methods individually for your own usage
//export let { getSession, commitSession, destroySession } = sessionStorage;