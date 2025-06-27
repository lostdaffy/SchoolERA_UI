import React from "react";

const About = () => {
  return (
    <>
      <div
        className="w-full h-screen px-20 flex items-center justify-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${creative_bg})`,
        }}
      >
        <div className="">
          <div className="flex gap-8">
            <div className="basis-2/3">
              <div className="welcome_img flex">
                <img src={welcome_1} className="w-lg" alt="" />
              </div>
            </div>

            <div className="basis-full">
              <div className="">
                <span className="text-3xl font-bold text-sky-400">
                  <i className="ri-graduation-cap-line font-normal"> </i>
                  SchoolERA
                </span>
                <h2 className="text-6xl font-bold text-gray-600  py-5">
                  Our School
                </h2>
                <div className="flex gap-10 pb-10">
                  <p className=" text-base text-gray-600">
                    Ipsum dolor sit amet consectetur adipisicing elit. Minima
                    dicta vel dolor ad, laudantium veritatis quia quis
                    reprehenderit, placeat dolore nemo modi vero ut alias quo
                    ipsam nam molestiae. Officiis. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Laborum error corrupti
                    delectus! Tempore aut quaerat rem obcaecati libero ratione
                    natus iusto enim. Molestias quos cum laboriosam libero
                    exercitationem, consequatur dolore.
                  </p>

                  <p className=" text-base text-gray-600">
                    Ipsum dolor sit amet consectetur adipisicing elit. Minima
                    dicta vel dolor ad, laudantium veritatis quia quis
                    reprehenderit, placeat dolore nemo modi vero ut alias quo
                    Tempore aut quaerat rem obcaecati libero ratione natus iusto
                    enim. Molestias quos cum laboriosam libero exercitationem,
                    consequatur dolore.
                  </p>
                </div>
                <p className="font-bold text-base">
                  delectus! Tempore aut quaerat rem obcaecati libero ratione
                </p>

                <div className="pt-10">
                  <Link className="bg-sky-400 px-10 py-3 rounded-full text-white">
                    <i className="ri-arrow-right-long-fill"></i> Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
