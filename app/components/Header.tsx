import { Form, Link } from "@remix-run/react";
import brainWaveLogo from "../../public/img/LogoAzulSinFondo.png";

function Header(props: any) {
  const profilePicture = props.photo;
  return (
    <div className="flex flex-row bg-black h-20">
      <div className="basis-8/12">
        <Link to="/">
          <img
            src={brainWaveLogo}
            className="h-20 ml-4"
            alt="Logo de BrainWave"
          />
        </Link>
      </div>
      <Link to={
        props.role == "admin" ? "/admin/profile" : "/user/profile"
      } className="inline-block basis-3/12">
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
      <div className="inline-block basis-1/12">
        <Form method="post" action="/auth/logout">
          <button className="bg-bluefigma4 hover:bg-bluefigma6 w-full">
            <span className="text-white text-base mx-10 my-7 float-left">
              Logout
            </span>
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Header;