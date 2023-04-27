// app/routes/auth/logout.ts
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { destroySession, getSession } from "../services/auth.server";
import { auth0 } from '../services/authEnv.server'

export const action = async ({ request }: ActionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const logoutURL = new URL(auth0.logoutUrl);

  logoutURL.searchParams.set("client_id", auth0.clientId);
  logoutURL.searchParams.set("returnTo", auth0.returnToUrl);

  return redirect(logoutURL.toString(), {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};