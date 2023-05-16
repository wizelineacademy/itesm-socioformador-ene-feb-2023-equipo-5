import { Link, NavLink, useLoaderData } from "@remix-run/react";
import brainWaveLogo from "../../public/img/LogoAzulSinFondo.png";
import profilePicture from "../../public/img/profilePicture.jpg";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { authenticator } from "../services/auth.server";

/*
export const loader = async ({ request }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request);

  return json(profile);
};
*/

function Header(nombre: any) {
  /*
  const profile = useLoaderData();
  console.log(profile)
  */

  // console.log(nombre)
  return (
    <div className="flex flex-row bg-black h-20">
      <div className="basis-4/5">
        <Link to="/">
          <img src={brainWaveLogo} className="h-20 ml-4" />
        </Link>
      </div>
      <img src={profilePicture} className="h-12 my-4 rounded-full" />
      <span className="text-white text-base mx-5 my-7">{nombre.nombre.displayName}</span>
    </div>
  );
}

export default Header;
