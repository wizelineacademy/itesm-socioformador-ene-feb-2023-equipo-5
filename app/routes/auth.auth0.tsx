import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { authenticator } from "../services/auth.server";

export let loader = () => redirect("/"); //Verify if the route is / or /login

export let action = ({ request }: ActionArgs) => {
  return authenticator.authenticate("auth0", request, {
    successRedirect: "/speechTesting",
    failureRedirect: "/login",
  });
};
