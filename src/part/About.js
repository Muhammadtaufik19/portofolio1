import React, { useState } from "react";

// asset
import taufik from "../assets/image/taufik.jpg";
import github from "../assets/image/github.svg";
import telegram from "../assets/image/telegram.svg";
import linkedin from "../assets/image/linkedin.svg";
import instagram from "../assets/image/instagram.svg";

export default function About() {
  const name = useState("Hi There, im Moh Taufik 👋");
  const description = useState(
    "I am very passionate and enthusiatic on programming especially frontend developer, I am person who have high curiousity so I love to learn something  new, becuse it can help me to upgrade my skills"
  );
  return (
    <div className="bg-about">
      <div class="container  ">
        <h5 class="row justify-content-center pt-5">
          <div className="col text-center">About Me</div>
        </h5>

        <div className="row justify-content-center pt-3">
          <div className="col-6">
            <p>{description}</p>
            {/* <p>
              I am person who have high curiousity so I love to learn something
              new, becuse it can help me to upgrade my skills
            </p> */}
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e2edff"
          fill-opacity="1"
          d="M0,64L34.3,64C68.6,64,137,64,206,85.3C274.3,107,343,149,411,160C480,171,549,149,617,133.3C685.7,117,754,107,823,106.7C891.4,107,960,117,1029,138.7C1097.1,160,1166,192,1234,176C1302.9,160,1371,96,1406,64L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
