import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("/");
    const links = <div className="flex items-center gap-2 md:gap-5 font-bold text-md md:text-xl">
    <a className={active==="/"?"text-blue-800 border-b-3 border-red-700":"hover:text-gray-600"} href="/">Home</a>
    <a className={active==="skills"?"text-blue-800 border-b-3 border-red-700":"hover:text-blue-700"} onClick={()=>setActive("skills")} href="#skills">Skills</a>
    <a className={active==="project"?"text-blue-800 border-b-3 border-red-700":"hover:text-blue-700"} onClick={()=>setActive("project")} href="#project">Project</a>
    <a className={active==="about"?"text-blue-800 border-b-3 border-red-700":"hover:text-blue-700"} onClick={()=>setActive("about")} href="#about">About</a>
    </div>
  return (
    <div className="navbar md:px-10 lg:px-12 sticky top-0 z-50 backdrop-blur-lg bg-white/30 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <a href="/"><h1 id="name" className="font-bold md:text-5xl text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate__animated animate__fadeInTopLeft">Rasel</h1></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#contact" className="md:px-4 md:py-2 px-2 py-1 hover:bg-amber-700 bg-amber-600 text-white font-semibold rounded-lg">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
