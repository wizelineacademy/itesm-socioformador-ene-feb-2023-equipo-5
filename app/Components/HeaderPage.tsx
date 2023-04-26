import React from "react";
import brainWaveLogo from "../../public/img/LogoAzulSinFondo.png";
import { Link } from "react-router-dom";

const HeaderPage = () => {
  return (
    // <div classNameName='mx-auto w-64'>
    //     <ul classNameName='text-sky-500 flex'>
    //         <li classNameName='px-4 py-2 whitespace-nowrap'>About us</li>
    //         <li classNameName='px-4 py-2 whitespace-nowrap'>Products</li>
    //         <li classNameName='px-4 py-2 whitespace-nowrap'>Pricing</li>
    //     </ul>
    // </div>
    <header className="sticky top-0 z-50 flex flex-row mt-0 mx-10 justify-between bg-gray-100 py-4 px-10">
      <div>
        <img
          src={brainWaveLogo}
          alt="Page Logo"
          className="h-20 flex flex-row mt-5 mx-15 "
        />
      </div>
      <nav className="flex flex-row mt-5 mx-15 items-center space-x-6 text-sky-600">
        <a
          href="#FirstSection"
          className="hover:text-sky-800 hover:font-medium w-max"
        >
          Home
        </a>

        <a
          href="#AboutSection"
          className="hover:text-sky-800 hover:font-medium w-max"
        >
          About Us
        </a>

        <section>
          <a
            href="#SubscribeSection"
            className="hover:text-sky-800 hover:font-medium w-max"
          >
            Contact
          </a>
        </section>

        {/* <a
          href="#SubscribeSection"
          className="hover:text-sky-800 hover:font-medium w-max"
        >
          Contact
        </a> */}
      </nav>
      <div>
        <Link to="/login">
          <button className="flex flex-row mt-9 mx-10 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Sign In
          </button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderPage;
