import React from "react";
import Banner2 from "../assets/Banner2.png";

const Newsbanner = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/* Banner Image*/}
          <div className="bg-gradientBg rounded-lg p-4">
            <img
              src={Banner2}
              alt=""
              className=" lg:h-[386px] rounded-lg 
          rounded-br-[100px] rounded-tl-[100px]"
            />
          </div>

          {/* Banner content*/}
          <div className="md:w-3/5 space-x-4">
            <h2 className="md:text-7xl ml-4 text-4xl font-bold text-white mb-6 leading-relaxed">
              The Art and Science of Frontend Development
            </h2>
            <p className="text-[#EBEBEB] text-2xl mb-8">
              Skilled in programming languages, frameworks, and tools, with a
              focus on clean code, scalability, and collaborative development.
            </p>
            <div className="space-x-5 space-y-4">
              <button className="btnPrimary">I have a code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsbanner;
