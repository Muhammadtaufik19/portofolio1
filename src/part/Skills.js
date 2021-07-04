import React from "react";
import "../App.css";
import Fade from "react-reveal/Fade";
// import { AiFillAndroid } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { SiCss3, SiBootstrap, SiRedux } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
export default function Skills() {
  return (
    <div className="bg-skills">
      <div className="container">
        <h5 className="skills text-center mb-5">
          Knowledge skills in website technology
        </h5>
        <div className="row justify-content-center">
          <div className="col-6  tengah mb-5 mt-md-3">
            <Fade left duration={1000}>
              <div>
                <AiFillHtml5 className="icon" />
                <p className="text-center">HTML</p>
              </div>
              <div>
                <SiCss3 className="icon" />
                <p className="text-center">CSS</p>
              </div>
              <div>
                <SiBootstrap className="icon" />
                <p className="text-center">BOOTSTRAP</p>
              </div>
              <div>
                <IoLogoJavascript className="icon" />
                <p className="text-center">JAVASCRIPT</p>
              </div>
            </Fade>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12 tengah">
            <Fade right duration={2000}>
              <div>
                <GrReactjs className="icon" />
                <p className="text-center">REACT JS</p>
              </div>
              <div>
                <SiRedux className="icon" />
                <p className="text-center">REDUX</p>
              </div>
              <div>
                <FaGitAlt className="icon" />
                <p className="text-center">GIT</p>
              </div>
              <div>
                <FaGithub className="icon" />
                <p className="text-center">GITHUB</p>
              </div>
              <div>
                <FiFigma className="icon" />
                <p className="text-center">Figma</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
