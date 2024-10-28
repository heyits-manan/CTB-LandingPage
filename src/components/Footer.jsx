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
            alt="App Store"
            width={180}
            height={0}
            className="mt-4"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src="/GooglePlay.png"
            alt="Google Play"
            width={200}
            height={0}
            className="mt-4"
          />
        </Link>
      </div>

      {/* Email Contact */}
      <div className="py-2 mt-4" id="contact">
        <p>
          Contact us at:{" "}
          <Link
            href="mailto:support@closetobuy.com"
            className="text-red-500 hover:underline"
          >
            support@closetobuy.com
          </Link>
        </p>
      </div>

      <div className="py-4">
        <p>Copyright © CLOSETOBUY 2024</p>
      </div>
    </div>
  );
}
