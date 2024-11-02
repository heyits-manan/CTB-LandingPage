import HeroSection from "../components/HeroSection";
import Section from "../components/Section";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div id="about" className="mt-5 md:mt-3">
        <Section
          title="Discover Deliciousness"
          description="From fresh ingredients to ready-made meals, we've got everything you need to satisfy your cravings. Whether you're looking for quick bites or gourmet groceries, our app brings a variety of food choices to your doorstep."
          imageSrc="/food.avif"
          backgroundColor="bg-gray-800 text-white"
          customClasses="p-2 h-[750px] md:h-[550px] lg:space-x-10 lg:h-[600px] lg:gap-20 2xl:gap-[20px]"
          customImageClasses="lg:mr-[30px] 2xl:mr-[50px]"
        />

        <Section
          title="Zero Commission Fees with CTB"
          description="Enjoy the benefits of our partnership with CTB, where we guarantee a 0% commission fee on all transactions. This means more savings for you and a commitment to our vendors."
          imageSrc="/savings.png"
          backgroundColor="bg-green-600 text-white"
          customClasses="p-2 m-5 h-[750px] md:h-[550px] lg:space-x-10 lg:h-[400px] lg:gap-[5px] 2xl:gap-[10px] border-black border-4 rounded-lg"
          customImageClasses="w-[200px] mt-[-50px] md:w-[250px] lg:w-[300px] lg:mr-20 xl:w-[400px] xl:mr-60 xl:mb-0"
          reverse
        />

        <Section
          title="Dress to Impress"
          description="Shop the latest fashion trends and update your wardrobe with the click of a button. From casual wear to high-end fashion, you'll find everything you need to stay stylish."
          imageSrc="/clothes.jpg"
          reverse
          customClasses="p-2 h-[650px] md:h-[550px] lg:space-x-10 lg:gap-20 2xl:gap-[300px] lg:h-[600px]"
        />
        <Section
          title="Stay Updated with Technology"
          description="Get the latest gadgets and electronics delivered to you. Whether you're upgrading your phone, shopping for a new laptop, or getting accessories, our collection of tech products has you covered."
          imageSrc="/electronics.jpg"
          backgroundColor="bg-gray-800 text-white"
          customClasses="p-2 h-[750px] md:h-[550px] lg:space-x-10 lg:h-[600px]"
          customImageClasses=" 2xl:mr-[50px]"
        />
        <Section
          title="Fresh and Convenient"
          description="No more last-minute grocery runs! With a wide range of fresh produce and daily essentials, we ensure you have everything you need to stock up your pantry, straight from the app."
          imageSrc="/groceries.jpeg"
          reverse
          customClasses="p-2 h-[650px] md:h-[550px] lg:space-x-10 lg:gap-20 2xl:gap-[300px] lg:h-[600px]"
        />

        <Section
          title="Seamless Deliveries with uEngage"
          description="Our trusted delivery partner, Uengage, ensures timely and reliable deliveries, keeping your satisfaction at the forefront of our service."
          imageSrc="https://www.uengage.in/assets/uen_io/images/uengage-logo-white.svg"
          backgroundColor="bg-green-600 text-white"
          customClasses="p-2 h-[550px] md:h-[300px] lg:space-x-10 lg:h-[600px]"
          customImageClasses="w-[250px] lg:w-[450px] lg:mr-20"
        />

        <Section
          title="Secure Payments with Razorpay"
          description="We’ve partnered with Razorpay to offer you a secure and efficient payment gateway. Enjoy T+2 payment settlements and a minimal 2% gateway charge."
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
          reverse
          customClasses="p-2 h-[200px] md:h-[400px] lg:space-x-10 lg:h-[400px]"
          customImageClasses="w-[300px] lg:w-[450px] lg:mr-5"
        />
      </div>
    </div>
  );
}
