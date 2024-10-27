import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div
      id="hero"
      className="flex items-center justify-center bg-white h-[60vh] md:h-[70vh] lg:h-[90vh] bg-cover bg-center bg-no-repeat md:bg-hero-pattern"
    >
      <div className="flex flex-col justify-center items-center h-[60vh] md:pl-5 lg:p-0">
        <p className="text-3xl font-bold text-center md:text-6xl">
          CLOSE <span className="text-[#FF5F4D]">TO</span> BUY
        </p>
        <p className="text-sm md:text-lg text-center mt-4 mb-5">
          Everything You Need, Right at Your Doorstep
          <br /> Food, Fashion, Tech & Groceries!
        </p>
        <div className="flex flex-row items-center gap-3 md:gap-3">
          <Link href="https://www.apple.com/in/app-store/">
            <Image
              src="/AppStore.png"
              alt="App Store Logo"
              width={180}
              height={0}
              className="mt-4"
            />
          </Link>
          <Link href="https://play.google.com">
            <Image
              src="/GooglePlay.png"
              alt="Google Play Logo"
              width={200}
              height={0}
              className="mt-4"
            />
          </Link>
        </div>
        <Link
          href="/order"
          className="bg-[#FF5F4D] text-white font-medium mt-10 py-2 px-6 rounded-full text-lg md:text-xl md:py-3 md:px-8 lg:py-4 lg:px-10 hover:bg-[#ff4a39] transition-colors duration-300 text-center"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}
