import { LoaderArgs, redirect } from "@remix-run/node";

import { authenticator } from "../services/auth.server";

export let loader = ({ request }: LoaderArgs) => {
  return authenticator
    .authenticate("auth0", request, {
      failureRedirect: "/login",
    })
    .then((resp: any) => {
      if (
        resp._json["https://smartspeak.example.com/roles"].includes("admin")
      ) {
        throw redirect("/admin/videos");
      } else {
        throw redirect("/userProfile");
      }
      //return resp
    });
};
