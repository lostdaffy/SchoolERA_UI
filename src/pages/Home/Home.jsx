import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import home_bg from "../../assets/home.jpg";
import welcome_1 from "../../assets/smiling-student.jpg";
import welcome_2 from "../../assets/smiling-teenager.jpg";

const Home = () => {
  return (
    <div>
      {/* Home */}
      <div
        class="home w-full h-screen flex items-center place-content-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `linear-gradient(#ffffff6b, #28a8e3de), url(${home_bg})`,
        }}
      >
        <div class="text-center">
          <h3 className="text-3xl font-semibold py-5">
            Welcome to Our <span className="text-sky-400">Kids School</span>
          </h3>
          <h2 className="text-7xl/22 font-bold text-gray-800">
            The Brighter Future for <br /> Every Child
          </h2>
          <div className="flex place-content-center ">
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
      {/* /Home */}

      <div className="w-full h-screen px-20 flex items-center justify-center">
        <div className=" ">
          <div className="flex gap-8">
            <div className="basis-2/3">
              <div className="welcome_img flex gap-1">
                <img src={welcome_1} className="w-xs" alt="" />
                <img src={welcome_2} className="w-xs" alt="" />
              </div>
            </div>

            <div className="basis-2/3">
              <div className="">
                <h2 className="text-4xl font-bold">
                  Welcome To Our <span className="text-sky-400">SchoolERA</span>
                </h2>
                <p className="py-5 text-base text-gray-600">
                  Ipsum dolor sit amet consectetur adipisicing elit. Minima
                  dicta vel dolor ad, laudantium veritatis quia quis
                  reprehenderit, placeat dolore nemo modi vero ut alias quo
                  ipsam nam molestiae. Officiis. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Laborum error corrupti
                  delectus! Tempore aut quaerat rem obcaecati libero ratione
                  natus iusto enim. Molestias quos cum laboriosam libero
                  exercitationem, consequatur dolore.
                </p>
                <p className="font-bold text-base">delectus! Tempore aut quaerat rem obcaecati libero ratione</p>
                <p className="py-5 text-base text-gray-600">
                  Ipsum dolor sit amet consectetur adipisicing elit. Minima
                  dicta vel dolor ad, laudantium veritatis quia quis
                  reprehenderit, placeat dolore nemo modi vero ut alias quo
                 Tempore aut quaerat rem obcaecati libero ratione
                  natus iusto enim. Molestias quos cum laboriosam libero
                  exercitationem, consequatur dolore.
                </p>
                <div className="pt-10">
                  <Link className="bg-sky-400 px-10 py-3 rounded-full text-white"><i className="ri-arrow-right-long-fill"></i> Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
