import React from "react";
import BrainLogo from "./BrainLogo.png";

function Footer() {
  return (
    <div className="mx-auto w-6/6">
      <footer class="flex place-content-center bg-neutral-0 text-center white:bg-neutral-900 lg:text-center">
        <span class="h-1 mt-8 w-full bg-gray-300 lg:w-1/3"></span>
        <div class="p-4 text-center text-neutral-100 dark:text-neutral-200 mx-0">
          <img src={BrainLogo} className="h-10 mx-auto" alt="Logo Brainwave" />
          © 2023 BrainWave, Inc. All rights reserved.
        </div>
        <span class="h-1 mt-8 w-full bg-gray-300 lg:w-1/3"></span>
      </footer>
    </div>
  );
}

export default Footer;
