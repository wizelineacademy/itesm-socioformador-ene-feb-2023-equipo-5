import BrainLogo from "../../public/img/LogoAzulSinFondo.png";

function Footer() {
  return (
    <div className="mx-auto w-6/6">
      <footer className="flex place-content-center bg-neutral-0 text-center white:bg-neutral-900 lg:text-center">
        <span className="h-1 mt-8 w-full bg-gray-300 lg:w-1/3 items-center"></span>
        <div className="p-4 text-center text-neutral-500 dark:text-neutral-200 mx-0 items-center">
          <img
            src={BrainLogo}
            className="h-10 mx-auto items-center"
            alt="Logo Brainwave"
          />
          © 2023 BrainWave, Inc. All rights reserved.
        </div>
        <span className="h-1 mt-8 w-full bg-gray-300 lg:w-1/3 items-center"></span>
      </footer>
    </div>
  );
}

export default Footer;
