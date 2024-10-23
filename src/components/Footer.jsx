import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 flex justify-center items-center">
      <p>
        Copyright ©{" "}
        <Link href="#" className="text-red-500">
          CLOSETOBUY
        </Link>{" "}
        2024
      </p>
    </footer>
  );
}
