import React from "react";
import CustomLink from "./CustomLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="container flex items-center justify-between py-2 sm:py-5 sm:px-5 px-2">
      <div>
        <Link href="/" className="text-lg sm:text-xl font-bold">
          Job <span className="text-yellow-500">Board</span>
        </Link>
      </div>
      <nav className="flex items-center gap-2 sm:gap-5">
        <CustomLink title="Login" ahref="/login" className="bg-gray-200" />
        <CustomLink
          title="Post a job"
          ahref="/post"
          className="bg-blue-600 text-white"
        />
      </nav>
    </header>
  );
};

export default Navbar;
