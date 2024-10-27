import HeroSection from "../components/HeroSection";
import Section from "../components/Section";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div id="about" className="mt-10">
        <Section
          title="Discover Deliciousness"
          description="From fresh ingredients to ready-made meals, we've got everything you need to satisfy your cravings. Whether you're looking for quick bites or gourmet groceries, our app brings a variety of food choices to your doorstep."
          imageSrc="/food.avif"
          backgroundColor="bg-gray-800 text-white"
        />
        <Section
          title="Dress to Impress"
          description="Shop the latest fashion trends and update your wardrobe with the click of a button. From casual wear to high-end fashion, you'll find everything you need to stay stylish."
          imageSrc="/clothes.jpg"
          reverse
        />
        <Section
          title="Stay Updated with Technology"
          description="Get the latest gadgets and electronics delivered to you. Whether you're upgrading your phone, shopping for a new laptop, or getting accessories, our collection of tech products has you covered."
          imageSrc="/electronics.jpg"
          backgroundColor="bg-gray-800 text-white"
        />
        <Section
          title="Fresh and Convenient"
          description="No more last-minute grocery runs! With a wide range of fresh produce and daily essentials, we ensure you have everything you need to stock up your pantry, straight from the app."
          imageSrc="/groceries.jpeg"
          reverse
        />
      </div>
    </div>
  );
}
