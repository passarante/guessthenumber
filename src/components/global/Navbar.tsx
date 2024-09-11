"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";
import UserDropdown from "./UserDropdown";
import useUserStore from "../../../store/user-store";

import { getUserDetails } from "@/actions/user-actions";

const Navbar = () => {
  const { user, setUser } = useUserStore((state) => state);
  useEffect(() => {
    getUserDetails().then((res) => {
      if (res.success && res.user) {
        setUser(res.user);
      }
    });
  }, []);

  return (
    <div className="bg-black h-20 sticky top-0 flex items-center justify-between p-6 z-50 border-b border-gray-600">
      {/* Logo */}
      <div className="flex items-center justify-center md:block flex-1">
        <Link href="/">
          <Image
            src={"/assets/images/logo.png"}
            width={300}
            height={80}
            alt="logo"
            className="w-48 md:w-80"
          />
        </Link>
      </div>

      {/* Menu */}
      <div className="flex items-center justify-center space-x-2 ">
        <div className="hidden  md:flex md:items-center md:space-x-2 ">
          {user ? (
            <div className="flex items-center space-x-2">
              <span>{user.name}</span>
              <UserDropdown />
            </div>
          ) : (
            <>
              <Button variant={"outline"}>
                <Link href="/login">Giriş</Link>
              </Button>
              <Button variant={"outline"}>Üye Ol</Button>
            </>
          )}
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
