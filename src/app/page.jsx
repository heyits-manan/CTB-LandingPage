import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div
        id="hero"
        className="flex flex-col justify-center items-center h-[50vh]  bg-gray-100 "
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

      <div id="about" className="flex justify-center items-center h-[30vh]">
        <p className="text-3xl font-semibold">About</p>
      </div>

      <div id="contact" className="flex justify-center items-center h-[50vh] ">
        <p className="text-3xl font-semibold">Contacts</p>
      </div>
    </div>
  );
}
