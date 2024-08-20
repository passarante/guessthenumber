import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-20 bg-black p-4 border-t border-slate-600 flex w-full items-center justify-center">
      <div className="flex items-center space-x-2 text-white">
        <span>&copy;</span>
        <span>Created with ❤️ and Next.js by </span>
        <Link
          className="hover:underline hover:animate-pulse hover:scale-110 duration-200 transition-all text-green-500"
          href={`https://github.com/fsahinbas`}
        >
          fApps
        </Link>
        <span>and</span>
        <Link
          className="hover:underline hover:animate-pulse hover:scale-110 duration-200 transition-all text-red-500"
          href={`https://github.com/passarante`}
        >
          gApps
        </Link>
      </div>
    </div>
  );
};

export default Footer;
