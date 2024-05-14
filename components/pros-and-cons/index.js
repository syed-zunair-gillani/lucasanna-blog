import React from "react";
import { SlLike, SlDislike } from "react-icons/sl";

const ProsAndCons = ({ pros, cons }) => {
  return (
    <>
      <h2 className="prosandconsheading">Pros</h2>
      <section className="grid grid-cols-1 prosandcons mt-5">
        <div className="bg-gray-100 p-4 pb-7">
          <div className="">
            <ul>
              {pros?.map((item, idx) => {
                return (
                  <li key={idx} className="mt-1 !list-none flex justify-start items-start">
                    <div className="bg-yellow rounded-full p-[5px] mt-2 text-white inline-block mr-3">
                      <SlLike />
                    </div>
                    <span className="">{item?.pros}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <h2 className="prosandconsheading mt-2 mb-4">Cons</h2>
        <div className="bg-gray-100 p-4 mb-4 pb-7">
          <div className="">
            <ul>
              {cons?.map((item, idx) => {
                return (
                  <li key={idx} className="mt-1 !list-none flex justify-start items-start">
                    <div className="bg-red-500 rounded-full p-[5px] mt-2 text-white inline-block mr-3">
                      <SlDislike />
                    </div>
                    <span>{item?.cons}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProsAndCons;
