import React from "react";
import { Logo } from "../components/index";

const NavBar = () => {
  return (
    <div className="bg-black text-white">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Logo />
        <ul className="flex space-x-6">
          <li className="hover:text-gray-400 cursor-pointer">About Us</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
