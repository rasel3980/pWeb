import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#16d1ac] text-base-content rounded py-4">
        <div className="md:flex justify-between items-center md:px-20 px-8">
          <div className="grid">
            <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-600 to-pink-600 ">
              Rasel Mia
            </h1>
            <p className="font-bold">MERN Stack Developer</p>
          </div>
          <nav className="grid grid-flow-col md:gap-9 mt-3 md:mt-0 text-gray-800 font-bold">
            <a href="/project" className="link link-hover">
              Project
            </a>
            <a href="/skills" className="link link-hover">
              Skills
            </a>
            <a href="/about" className="link link-hover">
              About Me
            </a>
            <a href="/contact" className="link link-hover">
              Contact
            </a>
          </nav>
          <nav>
            <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.facebook.com/share/1DQrSQLQC4/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary text-lg"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/rasel3980"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-neutral text-lg"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rasel80"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary text-lg"
            >
              <FaLinkedin />
            </a>
          </div>
          </nav>
        </div>
        <aside className="text-center mt-7">
          <p className="text-lg text-gray-700 font-bold">
            CopyRight © {new Date().getFullYear()} - All rights reserved by
            Rasel
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
