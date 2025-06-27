import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full border-y-1 shadow">
      <div className="flex px-20 py-8 place-content-between">
        <div className="w-100">
          <Link className="text-3xl font-bold text-black">
            School<span className="text-gray-400">ERA</span>
          </Link>
          <p className=" text-gray-800 py-1 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold py-4">Quick Links</h3>
          <ul>
            <li>
              <Link className="hover:text-sky-400 duration-200 ease-in">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400 duration-200 ease-in">
                Achievement
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400 duration-200 ease-in">
                Our Gallery
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400 duration-200 ease-in">
                Alumni
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold py-4">Quick Links</h3>
          <ul>
            <li>
              <Link className="hover:text-sky-400 duration-200 ease-in">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400 duration-200 ease-in">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400 duration-200 ease-in">
                Our Policies
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400 duration-200 ease-in">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold py-4">Contact us</h3>
          <p>
            Saharanpur, <br /> Uttar Pradesh, India, 247001
          </p>

          <div className="py-5">
            <Link className="bg-sky-400 py-2 px-5 text-white">
              <i className="ri-phone-fill"></i> Contact us
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-stone-800 px-20 py-2">
        <p className="text-center text-white">
          Copyright &copy; 2025 All Right Reserved
          <Link className="text-sky-400"> SchoolERA</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
