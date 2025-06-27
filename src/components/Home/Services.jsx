import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section class="best_edu mt-lg-5 pt-5">
      <div class="bg-light mt-5 py-5">
        <div class=" container py-5">
          <div class="text-center">
            <span class="h4 fw-bold color_D ">Service We Provide</span>
            <h2 class="h1 fw-bold pb-5 pt-3">
              Providing Good Qualities
              <br /> For Your Loving Kids
            </h2>
          </div>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col ">
              <div class="card border-0 h-100 bg-light ">
                <img
                  src="./images/sports_training.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body  text-center">
                  <h5 class="card-title fw-bold text-secondary">
                    Sports Training
                  </h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0 h-100 bg-light">
                <img
                  src="./images/school_bus.jpg"
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title fw-bold text-secondary">Bus Service</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0 h-100 bg-light">
                <img
                  src="./images/music_training.jpg"
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title fw-bold text-secondary">
                    Music Training
                  </h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0 h-100 bg-light">
                <img
                  src="./images/best_teachers.jpg"
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title fw-bold text-secondary">
                    Best Teanchers
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
