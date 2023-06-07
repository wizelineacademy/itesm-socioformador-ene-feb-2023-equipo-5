import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "../services/auth.server";
import { db } from "~/services/db";

export let loader = async ({ request }: LoaderArgs) => {
    const profile:any = await authenticator.authenticate("auth0", request, {
      failureRedirect: "/login",
    })
    
    const userName:any = await db.user.findUnique({
      where: {
        id: profile.id
      },
      select: {
        name: true
      }
    })

    if (!(typeof userName.name === "string")) {
      throw redirect("/user/registration")
    }

    if (profile._json["https://smartspeak.example.com/roles"].includes("admin")) {
      throw redirect("/admin/profile");
    } else {
      throw redirect("/user/profile");
    }

};
