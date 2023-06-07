import { Link } from "@remix-run/react";
import brainWaveLogo from "../../public/img/LogoAzulSinFondo.png";

function Header(props: any) {
  const profilePicture = props.photo;
  return (
    <div className="flex flex-row bg-black h-20">
      <div className="basis-4/5">
        <Link to="/">
          <img
            src={brainWaveLogo}
            className="h-20 ml-4"
            alt="Logo de BrainWave"
          />
        </Link>
      </div>
      <Link to={
        props.role == "admin" ? "/admin/videos" : "/user/profile"
      } className="inline-block basis-1/4">
        <img
          src={profilePicture}
          className="h-12 my-4 rounded-full float-left"
          alt="Foto del usuario"
          referrerPolicy="no-referrer"
        />
        <span className="text-white text-base mx-5 my-7 float-left">
          {props.name}
        </span>
      </Link>
    </div>
  );
}

export default Header;
