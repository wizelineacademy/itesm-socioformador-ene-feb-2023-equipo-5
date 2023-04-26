import type { V2_MetaFunction } from "@remix-run/react";
import googleIcon from "../../public/img/google.svg";
import { Link } from "react-router-dom";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Login" }];
};

export default function LoginPage() {
  return (
    <>
      <div className="grid place-content-center">
        <div className="max-w-lg grid place-content-center px-24 py-12 mt-20 border-2 border-stone-200 rounded-2xl shadow-xl">
          <p className="font-bold text-xl text-center">Inicia sesión</p>
          <p className="mt-6 text-justify text-gray-600">
            Bienvenido de nuevo a{" "}
            <span className="text-teal-400 font-bold">SmartSpeak</span>. Estamos
            encantados de ayudarte en tu camino hacia la mejora de tus
            habilidades en el idioma inglés. ¡Comencemos!
          </p>
          <button className="mt-10 px-8 py-4 border-2 border-stone-200 rounded-lg shadow">
            <object data={googleIcon} className="h-8 inline-flex" />
            <Link to="/Instructions">
              <span className="ml-4">Continua con Google</span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
