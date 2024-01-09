"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

// components

import IndexDropdown from "./Dropdowns/IndexDropdown";
import exp from "constants";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-1 bg-black shadow-2xl">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="p-1 hover:cursor-pointer hover:shadow-2xl rounded">
              <Link href="/">
                {" "}
                <Image src={"/r-logo.png"} alt="logo" width={50} height={50} />
              </Link>
            </div>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none text-soft-white hover:text-limeneer-cyan"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-limeneer-blue lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col gap-4 lg:flex-row list-none mr-auto px-3 py-auto lg:py-auto items-end text-sm uppercase font-bold">
              <li className="flex items-center py-auto">
                <Link
                  href="/Projects"
                  className="hover:text-limeneer-cyan text-soft-white py-5 px-2"
                >
                  <i className="fa-solid fa-lightbulb mr-2"></i>
                  Projects
                </Link>
              </li>
              <li className="flex items-center py-auto">
                <Link
                  href="/Product"
                  className="hover:text-limeneer-cyan text-soft-white py-5 px-2"
                >
                  <i className="fa-solid fa-box mr-2"></i>
                  Product
                </Link>
              </li>

              <li className="flex items-center py-auto">
                <Link
                  href="/Documentation"
                  className="hover:text-limeneer-cyan text-soft-white py-5 px-2"
                >
                  <i className="fa-solid fa-book fa-sm mr-2"></i>
                  Documentation
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-4 lg:flex-row list-none lg:ml-auto px-3 py-auto items-end text-sm uppercase font-bold">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center py-auto">
                <Link
                  href="https://discord.gg/sR9Zy3YDDh"
                  className="hover:text-limeneer-cyan text-soft-white py-5 px-2"
                >
                  <i
                    className="fa-brands fa-discord fa-sm mr-2"
                    // style={{ color: "#00ffff" }}
                  ></i>
                  Community
                </Link>
              </li>
              <li className="flex items-center py-auto">
                <Link
                  href="#About"
                  className="hover:text-limeneer-cyan text-soft-white py-5 px-2"
                >
                  <i className="fa-solid fa-user mr-2"></i>
                  About Us
                </Link>
              </li>
              {/* <li className="flex items-center">
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </Link>
              </li> */}

              {/* <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li> */}

              {/* <li className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                <Link href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index-navbar">
                  <i className="text-blueGray-400 fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </Link>
              </li> */}

              {/* <li className="flex items-center">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
