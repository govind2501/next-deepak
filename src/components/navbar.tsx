"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo3 from "../app/image/Logo3.gif";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <>
      {/*Sidebar*/}
      <div className="fixed">
        <button>
          {toggle ? (
            <IoIosArrowBack
              onClick={() => setToggle(!toggle)}
              className="fixed top-20 left-6 text-white font-bold size-6
             bg-red-700 cursor-pointer"
            />
          ) : (
            <IoIosArrowForward
              onClick={() => setToggle(!toggle)}
              className="fixed top-20 left-6 text-white font-bold size-6 
              bg-green-700 cursor-pointer"
            />
          )}
        </button>

        <div
          className={`fixed top-28  bg-yellow-300 text-gray-950 shadow-xl z-[999]
   w-[8rem] max-w-[16rem] h-auto overflow-hidden md:relative  
   ${toggle ? "left-[0]" : "left-[-100%]"} `}
        >
          <ul>
            <li className="hover:text-white hover:bg-blue-950  hover:font-serif">
              <Link
                href="/shorts"
                className="w-28 py-1 shadow-md rounded-md hover:text-white"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                Shorts
              </Link>
            </li>

            <li className="hover:text-white hover:bg-blue-950  hover:font-serif">
              <Link
                href="/video"
                className="w-28 py-1 shadow-md rounded-md hover:text-white"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                Video
              </Link>
            </li>

            <li className="hover:text-white hover:bg-blue-950  hover:font-serif">
              <Link
                href="/history"
                className="w-28 py-1 shadow-md rounded-md hover:text-white"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                History
              </Link>
            </li>

            <li className="hover:text-white hover:bg-blue-950  hover:font-serif">
              <Link
                href="/list"
                className="w-28 py-1 shadow-md rounded-md hover:text-white"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                Play List
              </Link>
            </li>

            <li className="hover:text-white hover:bg-blue-950  hover:font-serif">
              <Link
                href="/courses"
                className="w-28 py-1 shadow-md rounded-md hover:text-white"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                Courses{" "}
              </Link>
            </li>

            <li className="hover:text-white hover:bg-blue-950  hover:font-serif">
              <Link
                href="/game"
                className="w-28 py-1 shadow-md rounded-md hover:text-white"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                Game{" "}
              </Link>
            </li>

            <li className="hover:text-white hover:bg-blue-950  hover:font-serif">
              <Link
                href="/business"
                className="w-28 py-1 shadow-md rounded-md hover:text-white"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                Business
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*Sidebar End*/}

      {/*Header Navbar Start*/}

      <nav className="w-full bg-gray-300 pl-2 h-auto sm:h-12 md:h-16 lg:h-8 px-1 mb-6 lg:flex-row lg:w-auto sm:w-auto text-center flex justify-between items-center  fixed top-0 left-20 right-0  text-gray-950">
        <ul
          className={`flex flex-col lg:flex sm:flex-row space-y-3 sm:space-y-0 gap-2 h-auto sm:h-12 md:h-16 lg:h-16 py-5 px-10 md:flex items-center 
      ${open ? "hidden" : "flex"}`}
        >
          {/*Logo*/}
          <div>
            <Image
              src={Logo3}
              alt="Image"
              height={70}
              width={70}
              className="fixed top-0 left-0 bg-blue-500"
            />
          </div>
          {/*Logo End*/}
          <li className="  hover:text-white hover:bg-blue-950 hover:font-serif hover:mb-6 hover:text-lg shadow-md rounded-md py-0 w-20">
            <Link
              href="/"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Home{" "}
            </Link>
          </li>

          {/*Dropdown*/}

          <div className="relative w-28 shadow-md ">
            <div className="group">
              <ul
                className=" flex flex-col items-center rounded-lg w-full
      sm:flex-col md:flex-col "
              >
                <li className="justify-between text-center items-center hover:text-lg hover:font-serif group-hover:text-white hover:bg-blue-950 w-28 shadow-md rounded-md ">
                  {/*Dropdown Start */}
                  <button>
                    <li className="flex justify-between items-center gap-2">
                      <IoIosArrowDown className="rotate-180 group-hover:rotate-0 " />
                      <Link href="">Jewellery</Link>
                    </li>
                  </button>
                </li>

                <div className="hidden group-hover:flex flex-col ">
                  <ul className="lg:absolute space-y-1 right-0 rounded-md  ">
                    <li className="justify-between items-center text-center  hover:font-serif hover:text-white hover:bg-blue-950 w-30 shadow-md rounded-md">
                      <Link
                        href="/gold"
                        onClick={() => {
                          setOpen(!open);
                        }}
                      >
                        Gold Jewellery
                      </Link>
                    </li>

                    <li
                      className="justify-between items-center text-center  hover:font-serif
                    hover:text-white hover:bg-blue-950 w-30 shadow-md rounded-md"
                    >
                      <Link
                        href="/silver"
                        onClick={() => {
                          setOpen(!open);
                        }}
                      >
                        Silver Jewellery{" "}
                      </Link>
                    </li>
                    <li
                      className="justify-between items-center  hover:font-serif
                      hover:text-white hover:bg-blue-950 w-36 shadow-md rounded-md"
                    >
                      <Link
                        href="/daimond"
                        onClick={() => {
                          setOpen(!open);
                        }}
                      >
                        Daimond Jewellery
                      </Link>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>

          {/*Drop-Down End*/}

          <li
            className=" hover:text-white hover:bg-blue-950  hover:font-serif
    hover:text-lg hover:mb-6 shadow-md rounded-md py-0 w-24"
          >
            <Link
              href="/about"
              onClick={() => {
                setOpen(!open);
              }}
            >
              About{" "}
            </Link>
          </li>
          <li
            className=" hover:text-white hover:bg-blue-950  hover:font-serif
      hover:text-lg hover:mb-6 shadow-md rounded-md py-0 w-20"
          >
            <Link
              href="/gallery"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Gallery
            </Link>
          </li>

          <li
            className=" hover:text-white hover:bg-blue-950  hover:font-serif
      hover:text-lg hover:mb-6 shadow-md rounded-md py-0 w-20"
          >
            <Link
              href="/garment"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Garment
            </Link>
          </li>
          <li
            className=" hover:text-white hover:bg-blue-950  hover:font-serif
      hover:text-lg hover:mb-6 shadow-md rounded-md py-0 w-24"
          >
            <Link
              href="/need"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Your Need
            </Link>
          </li>

          <li>
            <input type="text" className="h-6 w-full sm:w-auto mb-1" />
            <button
              className="w-full sm:w-auto mb-1 hover:bg-yellow-800 text-white bg-blue-950 h-7 px-5"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {" "}
              Search ...{" "}
            </button>
          </li>
        </ul>
        {/*Mobail close and menu button start*/}

        <div className="fixed top-0 right-1 flex lg:hidden md:hidden  items-center">
          <div className="h-full ">
            <button>
              {open ? (
                <MdOutlineMenuBook
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="size-8 text-white bg-green-950"
                />
              ) : (
                <IoClose
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="size-8 bg-blue-950 text-white"
                />
              )}
            </button>
          </div>
        </div>

        {/*Mobail close and menu button end*/}
      </nav>
    </>
  );
};

export default Navbar;
