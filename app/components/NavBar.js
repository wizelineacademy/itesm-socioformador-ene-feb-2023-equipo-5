import React from 'react'
import academylogo from "./academylogo.png"
import profilepic from "./profilepic5.png"


function NavBar() {
  return (
    <div>
      
<nav className="border-black-200 bg-black dark:bg-black-900 dark:border-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center">
        <img src={academylogo} className="h-8 mr-3" alt="Wizeline Logo" />
    </a>
    <span className="sr-only">Adrián Faz</span>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Adrián Faz</a>
        </li>
        <li>
        <img src={profilepic} className="h-8 mr-3" alt="Foto de perfil" />
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar
