
import { installGlobals } from "@remix-run/node";
import { parse } from "cookie";

import { createUserSessionAdmin } from "../../app/services/session.server";

installGlobals();

async function createAndLogin(fullName: string) {
    if (!fullName) {
        throw new Error("email required for login");
    }

    const response = await createUserSessionAdmin({
        request: new Request("test://test"),
        remember: false,
        redirectTo: "/",
    });

    const cookieValue = response.headers.get("Set-Cookie");
    if (!cookieValue) {
        throw new Error("Cookie missing from createUserSession response");
    }
    const parsedCookie = parse(cookieValue);
    // we log it like this so our cypress command can parse it out and set it as
    // the cookie value.
    console.log(
        `
<cookie>
  ${parsedCookie.__session}
</cookie>
  `.trim()
    );
}

createAndLogin(process.argv[2]);