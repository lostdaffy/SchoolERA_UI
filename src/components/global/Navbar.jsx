import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full font-sans text-gray-100">
      <div className="px-20 py-2 bg-sky-400">
        <div className="flex list-none place-content-between text-sm">
          <li>
            <strong>Open Hours : 08:00-18:00 | Mon-Sat</strong>
          </li>
          <li>
            <strong>satyaasingh001@gmail.com</strong>
          </li>
          <li className="tracking-widest">
            <i className="ri-phone-fill"></i> <strong>+91 8273998875</strong>
          </li>
        </div>
      </div>

      <nav className="px-20 py-4 bg-white border-b-1 border-gray-200">
        <div className="flex place-content-between">
          <Link className="text-3xl font-bold text-black">
            School<span className="text-gray-400">ERA</span>
          </Link>
          <div className="flex gap-10 list-none self-center text-sm tracking-wider text-gray-800 font-semibold ">
            <li>
              <Link
                className="hover:text-sky-400 duration-200 ease-in text-sky-400"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="dropdown inline-block relative">
                <Link className="hover:text-sky-400 duration-200 ease-in">
                  About <i class="ri-arrow-drop-down-fill"></i>
                </Link>
                <ul class="dropdown-menu absolute hidden pt-6 border-2 border-amber-600">
                  <li className="bg-white hover:bg-sky-400 hover:text-white py-2 px-14 block whitespace-no-wrap">
                    <Link>About</Link>
                  </li>
                  <li className="bg-white hover:bg-sky-400 hover:text-white py-2 px-14 block whitespace-no-wrap">
                    <Link>About</Link>
                  </li>
                  <li className="bg-white hover:bg-sky-400 hover:text-white py-2 px-14 block whitespace-no-wrap">
                    <Link>About</Link>
                  </li>
                  <li className="bg-white hover:bg-sky-400 hover:text-white py-2 px-14 block whitespace-no-wrap">
                    <Link>About</Link>
                  </li>
                  
                </ul>
              </div>
            </li>
            <li>
              <Link className="hover:text-sky-400 duration-200 ease-in">
                Admission <i class="ri-arrow-drop-down-fill"></i>
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400 duration-200 ease-in">
                Academics <i class="ri-arrow-drop-down-fill"></i>
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400 duration-200 ease-in">
                Events
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400 duration-200 ease-in">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400 duration-200 ease-in">
                Contact us
              </Link>
            </li>
          </div>

          <div className="flex self-center">
            <li>
              <Link className="text-violet-600">
                <i className="ri-facebook-fill font-normal text-2xl"></i>
              </Link>
            </li>

            <li>
              <Link className="text-pink-600">
                <i className="ri-instagram-line font-normal text-2xl"></i>
              </Link>
            </li>

            <li>
              <Link className="text-fuchsia-600">
                <i className="ri-twitter-x-fill font-normal text-2xl"></i>
              </Link>
            </li>

            <li>
              <Link className="text-indigo-600">
                <i className="ri-linkedin-fill font-normal text-2xl"></i>
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
