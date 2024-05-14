import React, { useState } from "react";
import Tag from "../tag";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { FaPinterest } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { useRouter } from "next/router";
import { TOC } from "../toc";
import Advertisement from "../Advertisement";
import Link from "next/link";

export default function Sidebar({ tags, toc, adv }) {
  const router = useRouter();
  const isSingle = router?.asPath.includes("/blog/");

  const Heading = ({ heading }) => {
    return (
      <div className="flex items-center">
        <div className="p-1 mr-2 rounded-full bg-yellow"></div>
        <h2 className="text-xl font-rubik_medium">{heading}</h2>
      </div>
    );
  };

  return (
    <aside className={`lg:w-1/4 mb-10 ${isSingle && "hidden lg:block"}`}>
      <div className="sticky top-28">
        <div className="mb-4"></div>
        {toc && (
          <>
            <Heading heading="Table of content" />
            <TOC selector=".content" />
          </>
        )}

        <div className="mt-4">
          <Heading heading="Follow Us" />
        </div>

        <ul className="flex justify-around p-2 py-6 mt-4 bg-neutral-100 border-[1px] border-slate-100 ">
          <li className="text-xl cursor-pointer text-main hover:text-yellow hover:scale-110">
            <BsFacebook />
          </li>
          <li className="text-xl cursor-pointer text-main hover:text-yellow hover:scale-110">
            <AiOutlineTwitter />
          </li>
          <li className="text-xl cursor-pointer text-main hover:text-yellow hover:scale-110">
            <GrInstagram />
          </li>
          <li className="text-xl cursor-pointer text-main hover:text-yellow hover:scale-110">
            <FaPinterest />
          </li>
          <li className="text-xl cursor-pointer text-main hover:text-yellow hover:scale-110">
            <BsYoutube />
          </li>
        </ul>
        {
          adv?.length > 1 ? <div className="mt-8">
            <Advertisement adv={adv} />
          </div> : <div className="mt-8">
            <Link href={adv?.[0]?.url || '#'} target="_blank">
              <img src={adv?.[0]?.image.url} alt={adv?.[0]?.title} className='max-w-[300px] max-h-[300px] object-cover' />
            </Link>
          </div>
        }


        <div className="p-4 py-5 mt-8 bg-main ">
          <p className="font-sans text-base text-gray-100 font-extralight">
            <strong>Subscription</strong> Subscribe to our newsletter and
            receive a selection of cool articles every weeks
          </p>
          <input
            type="text"
            className="p-3 bg-transparent border-[1px] active:rounded-none border-gray-500 mt-3 focus:ring-0 active:shadow-none focus:border-yellow text-white outline-none w-full placeholder:text-sm placeholder:font-light"
            placeholder="Enter your email"
          />
          <button className="w-full p-3 mt-3 mb-3 text-sm font-light text-white uppercase rounded-none hover:bg-yellow hover:text-main bg-yellow">
            Subscribe
          </button>
          <div className="">
            <input type="checkbox" name="" id="" className="" />
            <label className="ml-2 text-base font-light text-gray-300">
              By checking this box, you confirm that you have read and are
              agreeing to our terms of use regarding the storage of the data
              submitted through this form.
            </label>
          </div>
        </div>
        <div className="mt-6">
          {tags?.length > 0 && (
            <>
              <Heading heading="Tags" />
              <ul className="flex flex-wrap gap-2 mt-6 mb-5 tags">
                {tags?.map((tag, index) => (
                  <span key={index} className={`capitalize font-rubik_light px-4 py-2  inline-flex text-sm cursor-pointer border-dashed rounded-full border-[1px] hover:shadow-lg bg-[#F2F2F2] `} >{tag}</span>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </aside >
  );
}
