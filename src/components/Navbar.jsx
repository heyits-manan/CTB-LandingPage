import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center p-5 bg-white shadow-md">
      <div className="flex items-center">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={50}
          height={60}
          className="h-[6vh]"
        />
        <div className="hidden text-2xl ml-4 font-bold sm:block">
          CLOSE <span className="text-[#FF5F4D]">TO</span> BUY
        </div>
      </div>
      <ul className="flex space-x-8 text-lg">
        <li>
          <Link href="/" className="hover:text-[#FF5F4D]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-[#FF5F4D]">
            About
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-[#FF5F4D]">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
