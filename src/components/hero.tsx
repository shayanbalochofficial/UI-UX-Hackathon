import Image from "next/image";
import StatsSection from "./stats";
import About from "./about";
import FoodCategory from "./foodcategory";
import WhyChooseUs from "./WhyChooseUs";
import MenuSection from "./MenuSection";
import MeetOurChef from "./chef";
import TestimonialSection from "./testimonial";
import FoodProcessBanner from "./FoodBanner";
import BlogSection from "./blogsection";

export default function Hero() {
  return (
    <>
      <section className="relative bg-black hero-background h-[100vh] flex items-center">
        <div className="container mx-auto px-10 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Fancy Subtitle */}
            <p className="text-yellow-500 text-xl font-great-vibes">
              It’s Quick & Amazing!
            </p>

            {/* Title */}
            <h1 className="text-5xl font-bold">
              <span className="text-yellow-500">The</span> Art of Speed <br />
              Food Quality
            </h1>

            {/* Description */}
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue.
            </p>

            {/* Call-to-Action Button */}
            <button className="bg-yellow-500 text-black font-medium py-3 px-6 rounded-full shadow-md hover:bg-yellow-600 transition">
              See Menu
            </button>
          </div>

          {/* Right Content */}
          <div className="relative">
            <Image
              src="/hero/heropic.svg"
              alt="Hero Image"
              width={500}
              height={500}
              className="relative z-10"
            />
            {/* Circular Decorative Items */}
            <div className="absolute top-1/4 left-[20%] w-16 h-16">
              <Image
                src="/path-to-circle-item-1.svg"
                alt="Item 1"
                width={64}
                height={64}
              />
            </div>
            <div className="absolute top-1/3 right-[15%] w-12 h-12">
              <Image
                src="/path-to-circle-item-2.svg"
                alt="Item 2"
                width={48}
                height={48}
              />
            </div>
            {/* Add more items as needed */}
          </div>
        </div>
      </section>
      <About />
      <FoodCategory />
      <WhyChooseUs />
      <StatsSection />
      <MenuSection />
      <MeetOurChef />
      <TestimonialSection />
      <FoodProcessBanner />
      <BlogSection />
    </>
  );
}
