import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import home_bg from "../../assets/home.jpg";

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

          <div class="pt-10">
            <Link class="bg-sky-400 text-white px-15 py-3 rounded-full text-1xl font-semibold">
              <i class="ri-school-line"></i> Admission Now
            </Link>
          </div>
        </div>
      </div>
      {/* /Home */}

      <div className="w-full h-screen">
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="welcome_img">
                <img src="./images/welcome_img.jpg" class="w-100" alt="" />
              </div>
            </div>
            <div class="col-md-12 col-lg-6 align-self-center pt-3">
              <div class="container">
                <h2 class="h1 fw-bold">
                  Welcome To Our <span class="color_D">School</span>
                </h2>
                <p class="text-secondary py-3">
                  Ipsum dolor sit amet consectetur adipisicing elit. Minima
                  dicta vel dolor ad, laudantium veritatis quia quis
                  reprehenderit, placeat dolore nemo modi vero ut alias quo
                  ipsam nam molestiae. Officiis. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Laborum error corrupti
                  delectus! Tempore aut quaerat rem obcaecati libero ratione
                  natus iusto enim. Molestias quos cum laboriosam libero
                  exercitationem, consequatur dolore.
                </p>
                <div class="py-4">
                  <a href="" class="view_more_btn">
                    Read More
                  </a>
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
