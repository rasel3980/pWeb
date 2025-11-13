import profile from "../assets/Rasel.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import hi from "./../assets/animation/HiAnimation - 1751452247067.json";
import "../../public/animation.css";
import "animate.css";
import Skills from "./Skills";
import Project from "./Project";
import Education from "./Education";
import ContactInfo from "./ContactInfo";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import About from "./About";

const Home = () => {
  return (
    <>
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-x-20 md:ml-12">
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[8px]">
              <div className="w-full h-full rounded-full bg-[#68D3BD] overflow-hidden">
                <img
                  className="w-full bg-[#87e3d0] h-full object-cover hover:scale-110 duration-700 transition transform rounded-full"
                  src={profile}
                  alt="Rasel Mia"
                />
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/share/1DQrSQLQC4/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary text-lg"
              >
                <FaFacebook className="transition transform hover:scale-170" />
              </a>
              <a
                href="https://github.com/rasel3980"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-neutral text-lg"
              >
                <FaGithub className="transition transform hover:scale-170" />
              </a>
              <a
                href="https://www.linkedin.com/in/rasel80"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary text-lg"
              >
                <FaLinkedin className="transition transform  hover:scale-170" />
              </a>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-3xl md:text-4xl font-semibold animate__animated animate__fadeInTopLeft">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-black">Hello</span>
                <Lottie className="h-18" animationData={hi} loop={true} />
              </div>
              <div>
                <span className="text-black">I'm{" "}</span>
                <strong
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate__animated animate__fadeInTopLeft"
                >
                  Rasel Mia
                </strong>
              </div>
            </div>

            <div className="my-2 font-bold">
              <TypeAnimation
                sequence={[
                  500,
                  "Front-End Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "MERN Stack Developer",
                ]}
                className="text-blue-600"
                speed={50}
                style={{ fontSize: "1.5em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>

            <p className="mt-4 text-base text-black leading-relaxed">
              I am a web developer currently studying Computer Science and
              Technology (CST) at Moulvibazar Polytechnic Institute.
            </p>

            <a href="/Rasel Mia_portfolio.pdf" download>
              <button className="btn btn-primary rounded-full mt-5">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        <About />
        <Skills />
        <div id="project">
          <Project />
        </div>
        <Education />
        <ContactInfo />
      </div>
    </>
  );
};

export default Home;
