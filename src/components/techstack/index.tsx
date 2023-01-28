import React from "react";

const TechStack = () => {
  return (
    <>
      <h2 className="text-center mb-5 font-bolder md:font-bold md:text-2xl text-xl text-violet-500">
        Technology Used
      </h2>
      <div className="flex w-full">
        <div className="flex-1">
          <ul className="list-disc ml-5">
            <li className="text-base font-normal text-gray-500 md:text-lg">
              Next Js
            </li>
            <li className="text-base font-normal text-gray-500 md:text-lg">
              Tailwind CSS
            </li>
            <li className="text-base font-normal text-gray-500 md:text-lg">
              Express
            </li>
            <li className="text-base font-normal text-gray-500 md:text-lg">
              Mongodb
            </li>
            <li className="text-base font-normal text-gray-500 md:text-lg">
              Node Js
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <ul className="list-disc ml-5">
            <li className="text-base font-normal text-gray-500 md:text-lg">
              Axios
            </li>
            <li className="text-base font-normal text-gray-500 md:text-lg">
              React Query
            </li>
            <li className="text-base font-normal text-gray-500 md:text-lg">
              Mongoose
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-start font-extrabold md:text-3xl text-xl text-gray-500 md:mt-16 mt-10">
        Mobile Friendly App
      </h2>
    </>
  );
};

export default TechStack;
