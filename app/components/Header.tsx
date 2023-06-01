import { Link } from "@remix-run/react";
import brainWaveLogo from "../../public/img/LogoAzulSinFondo.png";
//import profilePicture from "../../public/img/profilePicture.jpg";


function Header(nombre: any) {
  const profilePicture = nombre.nombre.photos[0].value
  return (
    <div className="flex flex-row bg-black h-20">
      <div className="basis-4/5">
        <Link to="/">
          <img src={brainWaveLogo} className="h-20 ml-4" alt="Logo de BrainWave"/>
        </Link>
      </div>
      <img src={profilePicture} className="h-12 my-4 rounded-full" alt="Foto del usuario"/>
      <span className="text-white text-base mx-5 my-7">{nombre.nombre.displayName}</span>
    </div>
  );
}

export default Header;
