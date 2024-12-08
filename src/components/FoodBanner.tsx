import { FaPlay } from "react-icons/fa";

const FoodProcessBanner = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center bg-black text-white p-6 h-[300px]"
      style={{
        backgroundImage: "url('/hero/food-banner.png')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Text Section */}
      <div className="relative z-10 md:w-1/2 space-y-6 text-right px-10 md:text-right md:ml-auto">
        <h3 className="text-lg font-semibold text-orange-500 font-great-vibes">
          Roasted Elite Plates
        </h3>
        <h1 className="text-3xl font-bold leading-snug">
          We Document Every Food
          <br /> Bean Process
          <span className="text-orange-500">until it is saved</span>
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum.
        </p>
        <div className="flex justify-end m-20 md:justify-start gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">
            Read More
          </button>
          <button className="flex items-center gap-2 border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-500 hover:text-white transition">
            <FaPlay className="text-sm" />
            Play Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodProcessBanner;
