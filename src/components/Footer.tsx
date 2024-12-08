import React from "react";
import Image from "next/image";
import { PiClockClockwiseBold } from "react-icons/pi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black">
      {/* First Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-6 md:px-16 py-6 md:py-[50px]">
        <div className="text-white md:w-[50%] w-full">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support?
          </h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-4 md:mt-[17px]">
            Don&#39;t wait, make a smart & logical quote here. It’s pretty easy.
          </p>
        </div>

        <div className="flex md:mt-0 mt-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-2 px-4 md:py-[10px] md:px-[20px] mr-2 w-full md:w-auto"
          />
          <button className="text-[#FF9F0D] bg-white py-2 md:py-[10px] px-4 md:px-[20px] w-full md:w-auto">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Separator */}
      <hr className="my-4 border-[#FF9F0D] mx-6 md:mx-16" />

      {/* Footer Links and Sections */}
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-16 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              About Us.
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline">
                  Corporate clients and leisure travelers have been relying on
                  Groundlink for dependable, safe, and professional chauffeured
                  car service in major cities across the world.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#FF9F0D] flex justify-center items-center w-16 h-16">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>

                <div className="ml-2">
                  <h3 className="text-[16px] text-[#FFFFFF] font-normal">
                    Opening Hours
                  </h3>
                  <h4 className="text-[10px] font-normal text-[#FFFFFF]">
                    Mon - Sat(8.00 - 6.00)
                  </h4>
                  <h4 className="text-[10px] font-normal text-[#FFFFFF]">
                    Sunday - Closed
                  </h4>
                </div>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              Useful Links
            </h2>
            <ul className="text-[#FFFFFF] font-medium">
              {["About", "News", "Partner", "Team", "Menu", "Contact"].map(
                (link, idx) => (
                  <li key={idx} className="mb-4">
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              Help?
            </h2>
            <ul className="text-[#FFFFFF] font-medium">
              {[
                { label: "FAQ", href: "/faq" },
                { label: "Term & conditions", href: "#" },
                { label: "Reporting", href: "#" },
                { label: "Documentation", href: "#" },
                { label: "Support Policy", href: "#" },
                { label: "Privacy", href: "#" },
              ].map(({ label, href }, idx) => (
                <li key={idx} className="mb-4">
                  <a href={href} className="hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              Recent Posts
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-[14px]">
              {[1, 2, 3].map((_, idx) => (
                <li key={idx} className="flex gap-4">
                  <Image
                    src="/foot.png"
                    alt="Recent Post Image"
                    width={50}
                    height={50}
                  />
                  <div className="ml-2">
                    <h2 className="text-[16px] text-[#FFFFFF] font-normal">
                      20 Feb 2022
                    </h2>
                    <h3 className="text-[18px] text-[#FFFFFF] font-normal">
                      Keep Your Business
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
      </div>
      <div className="w-full px-4 py-6 bg-gray-100 dark:bg-[#FF9F0D] flex items-center justify-between">
        <span className="text-sm text-[#FFFFFF] sm:text-center">
          Copyright @ 2024 Shayan Baloch. All Rights Reserved.
        </span>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map(
            (Icon, idx) => (
              <div
                key={idx}
                className="bg-white w-9 h-9 flex justify-center items-center rounded-full"
              >
                <Icon className="text-[#4F4F4F] text-[20px]" />
              </div>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
