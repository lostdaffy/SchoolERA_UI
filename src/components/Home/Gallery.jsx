import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section class="gallery mt-lg-5 pt-5">
      <div class="bg-light mt-5 py-5">
        <div class="container py-5">
          <div class="text-center">
            <span class="h4 fw-bold color_D ">School Gallery</span>
            <h2 class="h1 fw-bold pb-5 pt-3">
              Providing Good Qualities
              <br /> For Your Loving Kids
            </h2>
          </div>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card border-0 bg-light">
                <img
                  src="./images/gallary_1.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div class="col">
              <div class="card border-0 bg-light">
                <img
                  src="./images/gallary_2.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div class="col">
              <div class="card border-0 bg-light">
                <img
                  src="./images/gallary_3.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div class="col">
              <div class="card border-0 bg-light">
                <img
                  src="./images/gallary_4.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
