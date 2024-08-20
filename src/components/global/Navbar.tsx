import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div className="bg-black h-20 sticky top-0 flex items-center justify-between p-6 z-50 border-b border-gray-600">
      {/* Logo */}
      <div className="flex items-center justify-center flex-1">
        <Image
          src={"/assets/images/logo.png"}
          width={300}
          height={80}
          alt="logo"
          className="w-48 md:w-80"
        />
      </div>

      {/* Menu */}
      <div className="flex items-center justify-center space-x-2 ">
        <div className="hidden  md:flex md:items-center md:space-x-2 ">
          <Button variant={"outline"}>Giriş</Button>
          <Button variant={"outline"}>Üye Ol</Button>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
