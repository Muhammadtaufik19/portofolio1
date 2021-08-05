import React, { useState } from "react";

import project1 from "../assets/image/project1.jpg";
import project2 from "../assets/image/project2.jpg";
import project3 from "../assets/image/project3.jpg";
import project4 from "../assets/image/project4.jpg";

export default function Project() {
  return (
    <div className="bg-project">
      <div class="container">
        <h5 class="text-center">Project</h5>
        <div class="row mb-5 justify-content-center">
          <div class="col-md-3 mt-3 mb-3" style={{ width: 400 }}>
            <div class="card" style={{ height: "500px" }}>
              <img src={project3} alt="project1" style={{ height: "280px" }} />
              <div class="card-body">
                <h5 class="card-title">Warung Pojok Suramadu</h5>
                <p class="card-text">
                  Warung pojok suramadu adalah website untuk belanja online,
                  dimana terinspirasi dari permasalah warung sendiri, website
                  ini sebagai project latihan saya
                </p>
                <a
                  href="https://muhammadtaufik19.github.io/point-of-sale/"
                  target="_blank"
                  rel="nofollow"
                  class="btn btn-primary"
                >
                  Visit Web
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mt-3 mb-3" style={{ width: 400 }}>
            <div class="card" style={{ height: "500px" }}>
              <img src={project2} alt="project2" style={{ height: "280px" }} />
              <div class="card-body">
                <h5 class="card-title">Alquran Online</h5>
                <p class="card-text">
                  Web ini akan sangat membantu kita agar bisa membaca alquran di
                  manapun dan kapanpun, projek ini adalah latihan saya membuat
                  web dengan coding.
                </p>
                <a
                  href="https://muhammadtaufik19.github.io/alquran/"
                  class="btn btn-primary"
                  target="_blank"
                  rel="nofollow"
                  class="btn btn-primary"
                >
                  Visit Web
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mt-3 mb-3" style={{ width: 400 }}>
            <div class="card" style={{ height: "500px" }}>
              <img src={project4} alt="project2" style={{ height: "280px" }} />
              <div class="card-body">
                <h5 class="card-title">Bajuku</h5>
                <p class="card-text">
                  Project ini akan menyusul ini masih rencana awal dalam
                  pembutan web nya, semoga kedepannya dapat terhujudkan amin
                </p>
                <a href="#" class="btn btn-primary">
                  Visit Web
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e2edff"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
