import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import "../App.css";

// asset
import taufik from "../assets/image/taufik.jpg";
import github from "../assets/image/github.svg";
import telegram from "../assets/image/telegram.svg";
import linkedin from "../assets/image/linkedin.svg";
import instagram from "../assets/image/instagram.svg";

export default function Taufik() {
  const name = useState("Hi There, im Moh Taufik");
  const description = useState(
    "I am very passionate and enthusiatic on programming especially frontend developer, I am person who have high curiousity so I love to learn something  new, becuse it can help me to upgrade my skills"
  );
  return (
    <div className="bg-taufik">
      <div class="container">
        <div class="text-center ">
          <Fade bottom duration={1000}>
            <img className="img-taufik" src={taufik} alt="taufik" />
            <h1 className="mt-3 name"> {name}</h1>
            <p>
              {" "}
              <i>Front-End Web Developer</i>{" "}
            </p>
            <p>{description}</p>
          </Fade>
        </div>
        <div className="sicial-media">
          <Fade bottom duration={1000}>
            <a
              href="https://github.com/Muhammadtaufik19"
              target="_blank"
              rel="nofollow"
            >
              <img
                className="github image-icons"
                src={github}
                alt="github"
              ></img>
            </a>
          </Fade>
          <Fade bottom duration={2000}>
            <a
              href="https://web.telegram.org/k/"
              target="_blank"
              rel="nofollow"
            >
              <img
                className="telegram image-icons"
                src={telegram}
                alt="telegram"
              />
            </a>
          </Fade>
          <Fade bottom duration={3000}>
            <a
              href="https://www.instagram.com/taufik_streetball/"
              target="_blank"
              rel="nofollow"
            >
              <img
                className="instagram image-icons"
                src={instagram}
                alt="instagram"
              />
            </a>
          </Fade>
          <Fade bottom duration={4000}>
            <a
              href="https://www.linkedin.com/in/muhammad-taufik-868792167/"
              target="_blank"
              rel="nofollow"
            >
              <img
                className="linkedin image-icons"
                src={linkedin}
                alt="linkedin"
              />
            </a>
          </Fade>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,64L34.3,64C68.6,64,137,64,206,85.3C274.3,107,343,149,411,160C480,171,549,149,617,133.3C685.7,117,754,107,823,106.7C891.4,107,960,117,1029,138.7C1097.1,160,1166,192,1234,176C1302.9,160,1371,96,1406,64L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
