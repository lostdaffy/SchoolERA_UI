import React from "react";

const PrincipalMsg = () => {
  return (
    <>
      <div class="w-full h-full flex items-center justify-center">
        <div className="">
          <div class="flex flex-row">
            <div class="basis-1/3">
              <img src={creative_1} className="w-full" alt="" />
            </div>
            <div class="basis-1/3 flex items-center justify-center bg-sky-300">
              <div className="p-10 text-center text-white tracking-wider">
                <span className="text-sm font-semibold">- Gymnasium -</span>
                <h5 className="text-xl font-semibold  ">
                  Sports Education <br />& Gym Activities
                </h5>
                <p className="py-5 tracking-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis
                </p>
                <Link className="bg-sky-400 rounded-full px-10 py-3">
                  $ 42,52
                </Link>
              </div>
            </div>
            <div class="basis-1/3">
              <img src={creative_3} className="w-full" alt="" />
            </div>
            <div class="basis-1/3 flex items-center justify-center bg-sky-300">
              <div className="p-10 text-center text-white tracking-wider">
                <span className="text-sm font-semibold">- Laboratory -</span>
                <h5 className="text-xl font-semibold  ">
                  Watercolor & Life
                  <br />& Drawing Course
                </h5>
                <p className="py-5 tracking-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis
                </p>
                <Link className="bg-sky-400 rounded-full px-10 py-3">
                  $ 32,60
                </Link>
              </div>
            </div>
          </div>
          <div class="flex flex-row">
            <div class="basis-1/3 flex items-center justify-center bg-sky-300">
              <div className="p-10 text-center text-white tracking-wider">
                <span className="text-sm font-semibold">- Science -</span>
                <h5 className="text-xl font-semibold  ">
                  Chemistry Laboratory
                  <br />& Microscope
                </h5>
                <p className="py-5 tracking-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis
                </p>
                <Link className="bg-sky-400 rounded-full px-10 py-3">
                  $ 39,24
                </Link>
              </div>
            </div>
            <div class="basis-1/3">
              <img src={creative_4} className="w-full" alt="" />
            </div>
            <div class="basis-1/3 flex items-center justify-center bg-sky-300">
              <div className="p-10 text-center text-white tracking-wider">
                <span className="text-sm font-semibold">- External -</span>
                <h5 className="text-xl font-semibold  ">
                  Botanical Study <br />& Gardening
                </h5>
                <p className="py-5 tracking-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis
                </p>
                <Link className="bg-sky-400 rounded-full px-10 py-3">
                  $ 28,55
                </Link>
              </div>
            </div>
            <div class="basis-1/3 ">
              <img src={creative_2} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrincipalMsg;
