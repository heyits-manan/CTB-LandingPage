"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-50 flex justify-between items-center fixed w-full p-5 transition-colors  duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex flex-row items-center md:ml-10 2xl:gap-2">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={40}
          height={0}
          className="h-[5vh] xl:h-[55px] xl:w-[50px]"
        />
        <div className="hidden text-xl lg:text-2xl ml-5 font-semibold sm:block">
          CLOSE <span className="text-[#FF5F4D]">TO</span> BUY
        </div>
      </Link>

      <ul className="flex space-x-4 md:mr-10 lg:space-x-10 text-sm md:text-lg lg:text-xl">
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
            } hover:text-[#FF5F4D]`}
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
