import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center h-16 px-6 mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">RESU BUILD</span>
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Dashboard / Get Started */}
        {!isSignedIn ? (
          <div className="flex items-center gap-3">
            <Link to={"/dashboard"}>
              <button className="bg-gray-100 px-4 py-2 rounded-lg shadow hover:shadow-md cursor-pointer hover:bg-blue-500 hover:text-white">
                Dashboard
              </button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <Link to={"/auth/sign-in"}>
            <button className="bg-gray-100 px-4 py-2 rounded-lg shadow hover:shadow-md cursor-pointer hover:bg-blue-500 hover:text-white">
              Get Started
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
