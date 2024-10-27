"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center p-5 bg-white">
      <Link href="/" className="flex flex-row items-center">
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
      </Link>

      <ul className="flex space-x-8 text-lg">
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
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/order" ? "text-[#FF5F4D] font-semibold" : ""
            } hover:text-[#FF5F4D]`}
          >
            Order Now
          </Link>
        </li>
      </ul>
    </nav>
  );
}
