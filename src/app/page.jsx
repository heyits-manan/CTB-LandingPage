import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div id="hero" className="flex bg-white items-center justify-center">
        <div className="flex flex-col justify-center items-center h-[60vh] md:items-start md:pl-5">
          <p className="text-4xl font-bold text-center">
            CLOSE <span className="text-[#FF5F4D]">TO</span> BUY
          </p>
          <p className="text-lg text-center mt-4 mb-5 md:text-start">
            Everything You Need, Right at Your Doorstep
            <br /> Food, Fashion, Tech & Groceries!
          </p>
          <div className="flex flex-row items-center gap-5 md:gap-3">
            <Link href="/">
              <Image
                src="/AppStore.png"
                alt="App Store Logo"
                width={180}
                height={0}
                className="mt-4"
              />
            </Link>
            <Link href="/">
              <Image
                src="/GooglePlay.png"
                alt="Google Play Logo"
                width={200}
                height={0}
                className="mt-4"
              />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 md:justify-end">
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={600}
            height={0}
            className="rounded-lg h-[60vh]"
          />
        </div>
      </div>

      <div id="about">
        {/* Food Section */}
        <div className="flex flex-col lg:flex-row items-center mb-10 lg:space-x-10 bg-gray-800 h-[80vh]">
          <div className="lg:w-1/2 m-10 mt-20 text-white">
            <h2 className="text-3xl font-medium text-center lg:text-left mb-4">
              Discover Deliciousness
            </h2>
            <p className="text-lg font-thin text-center lg:text-left max-w-3xl">
              From fresh ingredients to ready-made meals, we&apos;ve got
              everything you need to satisfy your cravings. Whether you&apos;re
              looking for quick bites or gourmet groceries, our app brings a
              variety of food choices to your doorstep.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/food.avif"
              alt="Food"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Clothes Section (reverse layout) */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-10 lg:space-x-10 lg:space-x-reverse h-[70vh]">
          <div className="lg:w-1/2 mt-8 m-10">
            <h2 className="text-3xl font-medium text-center lg:text-left mb-4">
              Dress to Impress
            </h2>
            <p className="text-lg font-thin text-center lg:text-left max-w-3xl">
              Shop the latest fashion trends and update your wardrobe with the
              click of a button. From casual wear to high-end fashion,
              you&apos;ll find everything you need to stay stylish.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/clothes.jpg"
              alt="Clothes"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Electronics Section */}
        <div className="flex flex-col lg:flex-row items-center mb-5 lg:space-x-10 bg-gray-800 h-[70vh]">
          <div className="lg:w-1/2 m-10 text-white mt-10">
            <h2 className="text-3xl font-medium text-center lg:text-left mb-4">
              Stay Updated with Technology
            </h2>
            <p className="text-lg font-thin text-center lg:text-left max-w-3xl">
              Get the latest gadgets and electronics delivered to you. Whether
              you&apos;re upgrading your phone, shopping for a new laptop, or
              getting accessories, our collection of tech products has you
              covered.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end mb-4">
            <Image
              src="/electronics.jpg"
              alt="Electronics"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Groceries Section (reverse layout) */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-10 lg:space-x-10 lg:space-x-reverse h-[70vh]">
          <div className="lg:w-1/2 m-10">
            <h2 className="text-3xl font-medium text-center lg:text-left mb-4">
              Fresh and Convenient
            </h2>
            <p className="text-lg text-center font-thin lg:text-left max-w-3xl">
              No more last-minute grocery runs! With a wide range of fresh
              produce and daily essentials, we ensure you have everything you
              need to stock up your pantry, straight from the app.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/groceries.jpeg"
              alt="Groceries"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
