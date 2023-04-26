// TODO: Verify this route
// app/routes/auth/logout.ts
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { destroySession, getSession } from "../services/auth.server";
import { auth0 } from '../services/authEnv.server'
/*
export const action = async ({ request }: ActionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  //Todo: SE DEBERIA CAMBIAR EL LINK AL ENV
  const logoutURL = new URL("https://localhost:3000/"); // i.e https://YOUR_TENANT.us.auth0.com/v2/logout

  logoutURL.searchParams.set("client_id", auth0.clientId);
  //Tambien ponerlo en el ENV COMO LINK
  logoutURL.searchParams.set("returnTo", "https://localhost:3000/");

  return redirect(logoutURL.toString(), {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};*/

/*
import {
  AUTH0_CLIENT_ID,
  AUTH0_LOGOUT_URL,
  AUTH0_RETURN_TO_URL,
} from "~/constants/index.server";*/

const AUTH0_RETURN_TO_URL = "http://localhost:3000/"
const AUTH0_LOGOUT_URL = "https://smartspeak.us.auth0.com/v2/logout"

export const action = async ({ request }: ActionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const logoutURL = new URL(AUTH0_LOGOUT_URL);

  logoutURL.searchParams.set("client_id", auth0.clientId);
  logoutURL.searchParams.set("returnTo", AUTH0_RETURN_TO_URL);

  return redirect(logoutURL.toString(), {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};