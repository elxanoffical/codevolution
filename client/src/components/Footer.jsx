import React from "react";
import fbimg from "../assets/fbimg.svg";
import instaimg from "../assets/instaimg.svg";
import twtrimg from "../assets/twtrimg.svg";
import linkdimg from "../assets/linkdimg.svg";

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-secondary"></div>
            <span className="text-white">XYZ</span>
          </a>
          <p>
            Unlock the potential of your code with expert insights and
            innovative solutions that streamline development, optimize
            performance, and empower your projects to scale.
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none placeholder:text-white"
            />
            <input
              type="submit"
              value="Subscribe"
              className="py-2 px-4 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition"
            />
          </div>
        </div>

        {/* Footer navigation */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-5 mt-5">
            <h3 className="text-2xl font-semibold">Platform</h3>
            <ul className="flex flex-col gap-3">
              <a href="/" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-5 mt-5">
            <h3 className="text-2xl font-semibold">Help</h3>
            <ul className="flex flex-col gap-3">
              <a href="/" className="block hover:text-gray-300">
                How does it work?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Where to ask questions?
              </a>
              <a href="/" className="block hover:text-gray-300">
                How to get started?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Requirements & guidelines
              </a>
            </ul>
          </div>
          <div className="space-y-5 mt-5">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <ul className="flex flex-col gap-3">
              <a href="/" className="block hover:text-gray-300">
                (012) 1234-344-980
              </a>
              <a href="/" className="block hover:text-gray-300">
                123 XYZ Street
              </a>
              <a href="/" className="block hover:text-gray-300">
                Baku, City 20
              </a>
              <a href="/" className="block hover:text-gray-300">
                info@xyz.com
              </a>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <h1>© XYZ 2024 All Rights Reserved.</h1>
        <div className="flex items-center space-x-5">
          <img
            src={fbimg}
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src={instaimg}
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src={twtrimg}
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src={linkdimg}
            alt=""
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
