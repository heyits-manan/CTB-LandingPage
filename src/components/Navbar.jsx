"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center p-5 bg-yellow-400">
      <Link href="/" className="flex flex-row items-center 2xl:gap-2">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={40}
          height={0}
          className="h-[6vh] xl:h-[6vh] xl:w-[3vw]"
        />
        <div className="hidden text-2xl ml-4 font-bold sm:block">
          CLOSE <span className="text-[#FF5F4D]">TO</span> BUY
        </div>
      </Link>

      <ul className="flex space-x-4 lg:space-x-10 text-sm md:text-lg lg:text-xl">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-[#FF5F4D] font-semibold" : ""
            } hover:text-[#FF5F4D]`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className={`${
              pathname === "#contact" ? "text-[#FF5F4D] font-semibold" : ""
            } hover:text-[#FF5F4D] `}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/commission-calculator"
            className={`${
              pathname === "/commission-calculator"
                ? "text-[#FF5F4D] font-semibold"
                : ""
            } hover:text-[#FF5F4D]`}
          >
            Calculator
          </Link>
        </li>
      </ul>
    </nav>
  );
}
