import React, { useEffect, useState } from "react";
import { GrMenu } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import Link from "next/link";
import useRouter from "next/router";
import { FaTimes } from "react-icons/fa";
import { SiEagle } from "react-icons/si";
import Head from "next/head";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [headerClr, setHeaderClr] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [categories, setCategories] = useState();

  const router = useRouter;

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    scrollTop >= "1" ? setHeaderClr(true) : setHeaderClr(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const handleClick = () => {
    setToggleMenu(true);
  };
  const closeNavMenu = () => {
    setToggleMenu(false);
  };
  const showSearch = () => {
    setSearchActive(true);
  };
  const closeSearch = () => {
    setSearchActive(false);
  };
  const handleSearch = () => {
    inputValue &&
      router.push({
        pathname: "/search",
        query: { q: inputValue },
      });
    inputValue && setInputValue("");
    inputValue && setSearchActive(false);
  };

  const ChangeRoute = (path) => {
    router.push(path);
    setToggleMenu(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/categories");
      const res = await data.json();
      setCategories(res?.data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="2N0tu21Iv32pBC6YvT8J3x2X3vWpzZ6T2IstF3PQHA0"
        />
      </Head>
      <header
        className={`flex sticky top-0 z-[300] items-center justify-between  border-b-[1px] border-gray-200 ${
          headerClr ? "bg-gray-50" : "bg-white"
        }`}
      >
        {/* nav menu  */}
        <div className="border-r-[1px] p-4 border-gray-200">
          <div
            className="flex items-center gap-1 uppercase cursor-pointer group"
            onClick={handleClick}
          >
            <div className="group-active:scale-110">
              <GrMenu size={20} />
            </div>
            <p className="text-md">Menu</p>
          </div>
        </div>
        {/* middle  */}
        <div className="flex-grow">
          <div className="relative flex flex-row-reverse items-center md:flex-row">
            <div className="pr-4 ml-4 md:pr-0">
              <div
                className="cursor-pointer active:scale-110"
                onClick={showSearch}
              >
                <FiSearch size={20} />
              </div>
              <div
                className={`right-0 p-2 md:left-12 flex bg-white items-center -top-2 w-full left-0 md:w-[90%] ${
                  searchActive ? "absolute" : "hidden"
                }`}
              >
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full p-1 border-none outline-none bg-gray-50"
                  placeholder="Search hare..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="mr-2 cursor-pointer " onClick={closeSearch}>
                  <FaTimes />
                </div>
              </div>
            </div>
            {/* logo */}
            <div className="flex-grow text-2xl flex justify-center items-center font-bold">
              <div
                className=" navwrapper pr-10 inline-flex justify-center space-x-[1px] cursor-pointer active:scale-105 font-source_serif_700 md:ml-20"
                onClick={() => ChangeRoute("/")}
              >
                <span
                  className={`px-2 mr-1 text-white rounded-md bg-main `}
                >
                  Ca
                </span>
                <span
                  className={`transition-all flex duration-300 ease-linear`}
                >
                  napalandia
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* contact with us  */}
        {searchActive && (
          <button
            className={`bg-main p-3 rounded-full mr-1 text-white  md:hidden`}
            onClick={handleSearch}
          >
            <FiSearch size={20} />
          </button>
        )}

        <div className="hidden md:block">
          {searchActive ? (
            <button className={`primary-btn`} onClick={handleSearch}>
              Search Now!
            </button>
          ) : (
            <button
              onClick={() => router.push("/contact-us")}
              className={`primary-btn`}
            >
              Contact Us!
            </button>
          )}
        </div>
      </header>

      <nav
        className={`fixed top-0 py-8 pt-0 z-[500] transition-all duration-400 ease-in-out shadow-md bg-gray-100 w-[300px] h-screen overflow-y-scroll ${
          toggleMenu ? "left-0" : "-left-[100%]"
        }`}
      >
        <div className="relative">
          <div className="bg-gray-100 p-3 fixed w-[300px]">
            <button
              className="p-2 text-white rounded-full hover:scale-110 bg-main top-4 left-[15.75rem] active:scale-110"
              onClick={closeNavMenu}
            >
              <HiOutlineChevronLeft />
            </button>
          </div>
          <ul className="pt-[56px]">
            <li
              className="hover:bg-main navitem border-t-[1px]"
              onClick={() => ChangeRoute("/")}
            >
              Home
            </li>
            {categories?.map((nav, i) => (
              <li
                className="hover:bg-main navitem"
                onClick={() => ChangeRoute(`/${nav?.slug}`)}
                key={i}
              >
                {nav?.name}
              </li>
            ))}
            <li className="navitem" onClick={() => ChangeRoute("/about-us")}>
              About Us
            </li>
            <li className="navitem" onClick={() => ChangeRoute("/contact-us")}>
              Contact Us
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
