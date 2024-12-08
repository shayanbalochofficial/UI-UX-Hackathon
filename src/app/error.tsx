// Add this directive at the top of your file to make it a Client Component
"use client";

import Link from "next/link";
// import Image from "next/image";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Background Section */}
      <div
        className="w-full bg-no-repeat bg-center flex justify-center bg-cover"
        style={{
          backgroundImage: "url('//hero/stats.png.png')",
          height: "300px", // Use fixed height
        }}
      ></div>

      {/* Signup Form Section */}
      <section className="p-10 relative bg-white pt-36 flex flex-col items-center">
        <div className="w-[630px] text-center">
          <h3 className="text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
          <p className="font-bold text-[32px] mb-4">
            Oops! Looks like something went wrong
          </p>
          <p className="text-[18px] mb-4">
            Page cannot be found! We’ll have it figured out in no time.
          </p>
          <p className="text-[18px] mb-6">
            Meanwhile, check out these fresh ideas:
          </p>
          {/* Button */}
          <Link href="/">
            <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b]">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
