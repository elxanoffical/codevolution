import React from "react";
import feature2 from "../assets/feature2.png";

const Features = () => {
  return (
    <div className=" my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className=" flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h2 className="text-3xl text-primary font-bold lg:w-2/3 mb-3 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h2>
          <p className="text-base text-gray-800 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vel
            quos molestias non labore, distinctio earum at dolorem iusto ea.
          </p>
        </div>
        {/* Features cards*/}
        <div className="w-full lg:w-3/4">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">

            <div
              className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8
          flex items-center justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer
          dark:bg-white"
            >
              <div className="flex flex-col items-center justify-center">
                <img className="w-[80%] sm:w-[100%]" src={feature2} alt="" />
                <h3 className="text-2xl font-semibold text-primary px-4 text-center">
                  Lorem ipsum dolor sit.
                </h3>
              </div>
            </div>

            <div
              className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8
          flex items-center justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer
          md:mt-16 dark:bg-white"
            >
              <div>
                <img className="w-[80%] sm:w-[100%]" src={feature2} alt="" />
                <h3 className="text-2xl font-semibold text-primary px-4 text-center">
                  Lorem ipsum dolor sit.
                </h3>
              </div>
            </div>

            <div
              className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8
          flex items-center justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer
          dark:bg-white"
            >
              <div>
                <img className="w-[80%] sm:w-[100%]" src={feature2} alt="" />
                <h3 className="text-2xl font-semibold text-primary px-4 text-center">
                  Lorem ipsum dolor sit.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
