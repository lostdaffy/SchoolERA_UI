import React from "react";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
      <div
        class="home w-full h-screen flex pt-10 place-content-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `linear-gradient(#ffffff6b, #28a8e3de), url(${"/images/home.jpg"})`,
        }}
      >
        <div class="text-center">
          <h3 className="text-3xl font-semibold py-5">
            Welcome to Our <span className="text-sky-400">Kids School</span>
          </h3>
          <h2 className="text-7xl/22 font-bold text-gray-800">
            The Brighter Future for <br /> Every Child
          </h2>
          <div className="flex place-content-center">
            <p className="text-base font-normal text-gray-800 py-5 basis-6xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              exercitationem neque sit distinctio ipsam minima quidem pariatur
              placeat dolore vel eius earum explicabo cupiditate, amet soluta
              doloribus nemo facilis fugiat. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Necessitatibus nemo, consequatur
              dolorem inventore provident distinctio reiciendis voluptatibus
              debitis, sequi aut recusandae eos consectetur aperiam! Earum ipsam
              assumenda velit beatae quis.
            </p>
          </div>

          <div className="pt-10">
            <Link className="bg-sky-400 text-white px-15 py-3 rounded-full text-1xl font-semibold">
              <i className="ri-school-line"></i> Admission Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
