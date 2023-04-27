// app/routes/auth/auth0/callback.tsx
import type { LoaderArgs } from "@remix-run/node";

import { authenticator } from "../services/auth.server";

export let loader = ({ request }: LoaderArgs) => {
  return authenticator.authenticate("auth0", request, {
    successRedirect: "/speechTesting",
    failureRedirect: "/login",
  });
};