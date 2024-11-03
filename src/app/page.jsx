"use client";

import HeroSection from "../components/HeroSection";
import Section from "../components/Section";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div id="about" className="mt-5 md:mt-3">
        <Section
          title="Discover Deliciousness"
          description="From fresh ingredients to ready-made meals, we've got everything you need to satisfy your cravings."
          images={["/food.avif", "/food2.webp", "/food3.jpg"]}
          backgroundColor="bg-gray-800 text-white"
          customClasses="p-2 h-[550px] md:h-[550px] lg:space-x-10 lg:h-[600px]"
          customImageClasses="w-[500px] rounded-lg mt-[-350px] md:mt-[-250px] lg:mt-[0px] lg:w-[700px] lg:mr-[50px] 2xl:mr-[50px]"
        />

        <Section
          title="Zero Commission Fees with CTB"
          description="Enjoy the benefits of our partnership with CTB, where we guarantee a 0% commission fee on all transactions. This means more savings for you and a commitment to our vendors."
          imageSrc="/savings.png"
          backgroundColor="bg-green-600 text-white"
          customClasses="p-2 m-5 h-[750px] md:h-[550px] lg:space-x-10 lg:h-[450px] lg:gap-[5px] 2xl:gap-[10px]"
          customImageClasses="w-[200px] mt-[-50px] md:w-[250px] lg:w-[300px] lg:mr-20 xl:w-[400px] xl:mr-60 xl:mb-0"
          reverse
        />

        <Section
          title="Explore FoodCourt Options"
          description="Get access to a wide variety of cuisines and food choices from our FoodCourt, designed for customers to enjoy a diverse dining experience. Whether it's fast food, local delights, or international cuisine, you’ll find it all in one place."
          images={["/foodcourt.jpg", "/foodcourt2.jpg", "/foodcourt3.jpg"]}
          backgroundColor="bg-yellow-600 text-white"
          customClasses="p-2 h-[700px] md:h-[600px] lg:space-x-10 lg:h-[600px]"
          customImageClasses="w-[500px] rounded-lg mt-[-550px] md:mt-[-300px] lg:mt-[0px] lg:w-[700px] lg:mr-[50px] 2xl:mr-[50px]"
        />

        <Section
          title="Dress to Impress"
          description="Shop the latest fashion trends and update your wardrobe with the click of a button. From casual wear to high-end fashion, you'll find everything you need to stay stylish."
          images={["/clothes.jpg", "/clothes2.png", "/clothes3.avif"]}
          reverse
          customClasses="p-2 h-[650px] md:h-[550px] lg:space-x-10 lg:gap-20 2xl:gap-[300px] lg:h-[600px]"
          customImageClasses="w-[500px] rounded-lg mt-[-400px] md:mt-[-250px] lg:mt-[0px] lg:w-[700px] lg:mr-[50px] 2xl:mr-[50px]"
        />

        <Section
          title="Stay Updated with Technology"
          description="Get the latest gadgets and electronics delivered to you. Whether you're upgrading your phone, shopping for a new laptop, or getting accessories, our collection of tech products has you covered."
          images={[
            "/electronics.jpg",
            "/electronics2.webp",
            "/electronics3.avif",
          ]}
          backgroundColor="bg-gray-800 text-white"
          customClasses="p-2 h-[750px] md:h-[550px] lg:space-x-10 lg:h-[600px]"
          customImageClasses=" w-[500px] rounded-lg mt-[-550px] md:mt-[-250px] lg:mt-[0px] lg:w-[700px] lg:mr-[50px] 2xl:mr-[50px]"
        />

        <Section
          title="Fresh and Convenient"
          description="No more last-minute grocery runs! With a wide range of fresh produce and daily essentials, we ensure you have everything you need to stock up your pantry, straight from the app."
          images={["/groceries.jpeg", "/groceries2.jpg", "/groceries3.jpg"]}
          reverse
          customClasses="p-2 h-[650px] md:h-[550px] lg:space-x-10 lg:gap-20 2xl:gap-[300px] lg:h-[600px]"
          customImageClasses="w-[500px] rounded-lg mt-[-500px] md:mt-[-250px] lg:mt-[0px] lg:w-[700px] lg:mr-[50px] 2xl:mr-[50px]"
        />

        <Section
          title="Seamless Deliveries with uEngage"
          description="Our trusted delivery partner, Uengage, ensures timely and reliable deliveries, keeping your satisfaction at the forefront of our service."
          imageSrc="https://www.uengage.in/assets/uen_io/images/uengage-logo-white.svg"
          backgroundColor="bg-green-600 text-white"
          customClasses="p-2 m-2 h-[600px] md:h-[300px] lg:space-x-10 lg:h-[500px]"
          customImageClasses="w-[250px] lg:w-[450px] lg:mr-20"
        />

        <Section
          title="Secure Payments with Razorpay"
          description="We’ve partnered with Razorpay to offer you a secure and efficient payment gateway. Enjoy T+2 payment settlements and a minimal 2% gateway charge."
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
          reverse
          customClasses="p-2 h-[550px] md:h-[300px] lg:space-x-10 lg:h-[300px] lg:mt-[50px]"
          customImageClasses="w-[300px] lg:w-[450px] lg:mr-5"
        />
      </div>
    </div>
  );
}
