import React, { useState } from "react";
import { GiEnvelope } from "react-icons/gi";
import { FiFacebook,FiTwitter,FiInstagram,FiLinkedin  } from "react-icons/fi";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import { SiEagle } from "react-icons/si";


export default function Footer() {
  const [input, setInput] = useState();
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <footer className="bg-main mt-10">
      <div className="container px-4 lg:px-20 mx-auto pt-20 pb-6">
        {/* top footer  */}
        <div className="flex">
          <div className="w-full flex justify-center flex-col items-center">
            <h2 className="text-white font-sohne_700 text-center leading-[45px] text-4xl ">
              Subscribe newsletter
            </h2>
            <div className="mt-6 max-w-[400px] w-full relative">
              <input
                type="text"
                name="newsletter"
                value={input}
                onChange={handleChange}
                className="bg-transparent text-gray-200 border-b-2 border-yellow p-2 w-full"
              />
              <div className="text-yellow text-3xl absolute top-1 right-0">
                <GiEnvelope />
              </div>
            </div>
          </div>
        </div>
        {/* bottom  */}
        <div className="">
          <div className="flex justify-center items-center mt-4">
            <p className="mt-4 text-gray-300 max-w-[550px] text-center font-rubik_light"> Discover the cutting-edge realm of technology with our tech blog. Stay informed, inspired, and empowered to embrace the future. Join our community and embark on a journey of digital exploration.</p>
          </div>
           <ul className="text text-gray-500 flex space-x-7 justify-center mt-8 flex-wrap">
              <li className="cursor-pointer hover:text-yellow"><Link href="/">Home</Link></li>
              <li className="cursor-pointer hover:text-yellow"><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li className="cursor-pointer hover:text-yellow"><Link href="/contact-us">Contact Us</Link></li>
              <li className="cursor-pointer hover:text-yellow"><Link href="/write-for-us">Write For Us</Link></li>
            </ul>
          
        </div>
        {/* copyright  */}
        <div className="flex flex-col md:flex-row space-y-4 justify-between items-center text-gray-500 mt-20 pt-7 border-t-[1px] border-gray-800">
          <p className="text-gray-500 text-center ">Copyright hitecheagle @ 2023 design & developed by zunair </p>
          <li className="flex space-x-5 text-xl">
                <span className="cursor-pointer hover:text-yellow"><FiFacebook/></span>
                <span className="cursor-pointer hover:text-yellow"><FiTwitter/></span>
                <span className="cursor-pointer hover:text-yellow"><FiInstagram/></span>
                <span className="cursor-pointer hover:text-yellow"><FiLinkedin/></span>
              </li>
        </div>
      </div>
    </footer>
  );
}
