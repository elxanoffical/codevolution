import React, { useState } from "react";
import { pricingItem } from "../data/pricing";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto py-10">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2 dark:text-white">
          Here are all our plans
        </h2>
        <p className="text-gray-800 md:w-1/3 mx-auto px-4 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum,
          natus quam aliquid unde recusandae! Numquam.
        </p>

        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold dark:text-white">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full transition duration-200 ease-in-out 
              ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold dark:text-white">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        {pricingItem.map((item, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4
        rounded-lg shadow-2xl hover:scale-95 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-3xl font-bold text-center text-primary dark:text-white">
              {item.name}
            </h3>
            <p className="text-gray-700 text-center my-5 dark:text-gray-400">{item.description}</p>
            <p className="mt-5 text-center text-secondary text-4xl font-bold">
              {isYearly ? `$${item.yearPrice}` : `$${item.monthPrice}`}{" "}
              <span
                className=" text-base
              text-gray-700 font-medium dark:text-gray-400"
              >
                /{isYearly ? "year" : "month"}
              </span>
            </p>

            <ul className="mt-4 space-y-2 px-4 flex flex-col gap-3">
              <li className="flex gap-2 items-center dark:text-white">
                <button className="w-4 h-4 rounded-full bg-green-500"></button>
                Videos of lessons
              </li>
              <li className="flex gap-2 items-center dark:text-white">
                <button className="w-4 h-4 rounded-full bg-green-500"></button>
                Homework check
              </li>
              <li className="flex gap-2 items-center dark:text-white">
                <button className="w-4 h-4 rounded-full bg-green-500"></button>
                Additional practical task
              </li>
              <li className="flex gap-2 items-center dark:text-white">
                <button className="w-4 h-4 rounded-full bg-green-500"></button>
                Monthly conferences
              </li>
              <li className="flex gap-2 items-center dark:text-white">
                <button className="w-4 h-4 rounded-full bg-green-500"></button>
                Personal advice from teachers
              </li>
            </ul>

            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btnPrimary">Buyying</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
