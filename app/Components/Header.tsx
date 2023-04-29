import { Link, NavLink } from "@remix-run/react";
import brainWaveLogo from "../../public/img/LogoAzulSinFondo.png";
import profilePicture from "../../public/img/profilePicture.jpg";

function Header() {
  return (
    <div className="flex flex-row bg-black h-20">
      <div className="basis-4/5">
        <Link to="/">
          <img src={brainWaveLogo} className="h-20 ml-4" />
        </Link>
      </div>
      <img src={profilePicture} className="h-12 my-4 rounded-full" />
      <span className="text-white text-base mx-5 my-7">Francisco Mestizo</span>
    </div>
  );
}

export default Header;
