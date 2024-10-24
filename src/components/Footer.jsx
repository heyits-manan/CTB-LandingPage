import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white flex flex-col justify-center items-center">
      <div id="contact" className="flex justify-center items-center h-[20vh] ">
        <p className="text-3xl font-semibold">Contacts</p>
      </div>
      <div className="">
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
