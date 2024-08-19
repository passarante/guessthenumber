import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div className="bg-slate-800 h-20 sticky top-0 flex items-center justify-between p-6">
      {/* Logo */}
      <div>
        <Image
          src={"/assets/images/logo.png"}
          width={300}
          height={80}
          alt="logo"
        />
      </div>

      {/* Menu */}
      <div className="flex items-center justify-center space-x-2 ">
        <Button variant={"outline"}>Giriş</Button>
        <Button variant={"outline"}>Üye Ol</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
