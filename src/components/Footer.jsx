import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white flex flex-col justify-center items-center">
      {/* App Store and Play Store Links */}
      <div className="mt-3 flex flex-row items-center gap-5">
        <Link href={"/"}>
          <Image
            src="/AppStore.png"
            alt="Logo"
            width={180}
            height={0}
            className=" mt-4"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src="/GooglePlay.png"
            alt="Logo"
            width={200}
            height={0}
            className=" mt-4"
          />
        </Link>
      </div>

      {/* Contact Section */}

      {/* <div id="contact" className="flex justify-center items-center h-[20vh]">
        <p className="text-3xl font-semibold">Contacts</p>
      </div> */}

      {/* Copyright Section */}
      <div className="py-4">
        <p>
          Copyright ©{" "}
          <Link href="/" className="text-red-500">
            CLOSETOBUY
          </Link>{" "}
          2024
        </p>
      </div>
    </div>
  );
}
