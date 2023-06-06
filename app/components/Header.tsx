import { Form, Link } from "@remix-run/react";
import brainWaveLogo from "../../public/img/LogoAzulSinFondo.png";
//import profilePicture from "../../public/img/profilePicture.jpg";

function Header(props: any) {
  const profilePicture = props.nombre.photos[0].value;
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
      <div className="inline-block basis-3/12">
        <Link
          to={
            props.nombre._json["https://smartspeak.example.com/roles"].includes(
              "admin"
            )
              ? "/admin/videos"
              : "/user/profile"
          }
          className="inline-block basis-1/4"
        >
          <img
            src={profilePicture}
            className="h-12 my-4 rounded-full float-left"
            alt="Usuario"
            referrerPolicy="no-referrer"
          />
          <span className="text-white text-base mx-5 my-7 float-left">
            {props.nombre.givenName}
          </span>
        </Link>
      </div>
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
