import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div
        id="hero"
        className="flex flex-col justify-center items-center h-[60vh]  bg-gray-100 "
      >
        <p className="text-4xl font-bold text-center">CloseToBuy</p>
        <p className="text-lg text-center mt-4 mb-5">
          Everything You Need, Right at Your Doorstep<br></br> Food, Fashion,
          Tech & Groceries!
        </p>
        <div className="flex flex-row items-center gap-5">
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
      </div>
      <div id="about" className="p-10">
        {/* Food Section */}
        <div className="flex flex-col lg:flex-row items-center mb-20 lg:space-x-10 mt-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-center lg:text-left mb-4">
              Discover Deliciousness
            </h2>
            <p className="text-lg text-center lg:text-left max-w-3xl">
              From fresh ingredients to ready-made meals, we&apos;ve got
              everything you need to satisfy your cravings. Whether you&apos;re
              looking for quick bites or gourmet groceries, our app brings a
              variety of food choices to your doorstep.
            </p>
          </div>
          <div className="lg:w-1/2 flex mt-4 justify-center lg:justify-end">
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
        <div className="flex flex-col lg:flex-row-reverse items-center mb-20 lg:space-x-10 lg:space-x-reverse">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-center lg:text-left mb-4">
              Dress to Impress
            </h2>
            <p className="text-lg text-center lg:text-left max-w-3xl">
              Shop the latest fashion trends and update your wardrobe with the
              click of a button. From casual wear to high-end fashion,
              you&apos;ll find everything you need to stay stylish.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end  mt-3 ">
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
        <div className="flex flex-col lg:flex-row items-center mb-20 lg:space-x-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-center lg:text-left mb-4">
              Stay Updated with Technology
            </h2>
            <p className="text-lg text-center lg:text-left max-w-3xl">
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
        <div className="flex flex-col lg:flex-row-reverse items-center mb-20 lg:space-x-10 lg:space-x-reverse">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-center lg:text-left mb-4">
              Fresh and Convenient
            </h2>
            <p className="text-lg text-center lg:text-left max-w-3xl">
              No more last-minute grocery runs! With a wide range of fresh
              produce and daily essentials, we ensure you have everything you
              need to stock up your pantry, straight from the app.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-4">
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

      <div id="contact" className="flex justify-center items-center h-[50vh] ">
        <p className="text-3xl font-semibold">Contacts</p>
      </div>
    </div>
  );
}
