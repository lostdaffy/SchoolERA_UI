import React from "react";
import { Link } from "react-router-dom";

const Classes = () => {
  return (
    <section class="classes mt-lg-5 pt-5 my-lg-5">
      <div class="container mt-5">
        <div class="row flex-wrap-reverse">
          <div class="col-md-12 col-lg-6">
            <div class="container">
              <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card border-0">
                    <div class="card-body text-center">
                      <img
                        src="./images/pre_primary.jpg"
                        class="w-100 rounded shadow-lg"
                        alt=""
                      />
                      <h5 class="card-title pt-4 text-secondary fw-bold">
                        Pre Primary Education
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card border-0">
                    <div class="card-body text-center">
                      <img
                        src="./images/primary_img.jpg"
                        class="w-100 rounded shadow-lg"
                        alt=""
                      />
                      <h5 class="card-title pt-4 text-secondary fw-bold">
                        Primary Education
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card border-0">
                    <div class="card-body text-center">
                      <img
                        src="./images/the_middle_school.jpg"
                        class="w-100 rounded shadow-lg"
                        alt=""
                      />
                      <h5 class="card-title pt-4 text-secondary fw-bold">
                        The Middle School
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card border-0">
                    <div class="card-body text-center">
                      <img
                        src="./images/secondary.jpg"
                        class="w-100 rounded shadow-lg"
                        alt=""
                      />
                      <h5 class="card-title pt-4 text-secondary fw-bold">
                        The Secondary School
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 align-self-center">
            <div class="container">
              <span class="h4 color_D fw-bold">Classes</span>
              <h2 class="h1 fw-bold">Smarty Kindergarden</h2>

              <p class="text-secondary py-3">
                Ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
                odit minima laboriosam rem quae porro, voluptatibus laudantium
                vitae impedit cumque reprehenderit aspernatur dolore omnis quo
                qui vero magnam repellendus recusandae.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                numquam, corporis labore animi voluptatem illo eius obcaecati
                qui quos natus ut ullam doloribus pariatur molestias totam in
                nostrum ducimus et?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                fugit natus. Incidunt, at saepe minima ducimus quasi, voluptatum
                ullam dolor asperiores, atque minus eligendi inventore. Adipisci
                labore doloribus voluptatem quibusdam.
              </p>

              <div class="py-4">
                <a href="" class="view_more_btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
