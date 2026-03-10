import { motion } from "motion/react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";
import ProjectCard from "./ProjectCard";

import gHome from "./../assets/projectImg/g-home.png";
import gSearch from "./../assets/projectImg/g-search.png";
import gProduct from "./../assets/projectImg/g-products.png";
import gAbout from "./../assets/projectImg/g-about.png";
import gCart from "./../assets/projectImg/g-cart.png";
import gContact from "./../assets/projectImg/g-contact.png";
import htHome from "./../assets/projectImg/hotel-home.png";
import hBooking from "./../assets/projectImg/h-booking.png";
import hLogin from "./../assets/projectImg/h-login.png";
import hRegis from "./../assets/projectImg/h-regis.png";
import hUpdate from "./../assets/projectImg/h-update.png";
import hRoom from "./../assets/projectImg/h-rooms.png";
import vHome from "./../assets/projectImg/v-home.png";
import vAddedVisa from "./../assets/projectImg/addedMvisa.png";
import myVisa from "./../assets/projectImg/myVisa.png";
import visaAdd from "./../assets/projectImg/v-addV.png";
import allVisa from "./../assets/projectImg/v-allVisa.png";

interface Project {
  img: string[];
  name: string;
  description: string;
  liveLink?: string;
  clientCode?: string;
  serverCode?: string;
  technology: React.ReactNode[];
}

const PROJECTS: Project[] = [
  {
    img: [htHome, hRoom, hRegis, hBooking, hUpdate, hLogin],
    name: "Room-Rover",
    description: "A fully-functional hotel booking web app. Users can browse rooms, book stays, view room details, post reviews, and manage bookings.",
    liveLink: "https://hotel-booking-platform-b1fc3.web.app/",
    clientCode: "https://github.com/rasel3980/hotel-booking-platform",
    serverCode: "https://github.com/rasel3980/Hotel-Booking-Server",
    technology: [
      <FaReact      className="text-sky-400 size-8"     title="React"      />,
      <SiTailwindcss className="text-sky-400 size-8"    title="TailwindCSS"/>,
      <FaNodeJs     className="text-green-500 size-8"   title="Node.js"    />,
      <SiExpress    className="text-gray-400 size-8"    title="Express.js" />,
      <SiMongodb    className="text-green-600 size-8"   title="MongoDB"    />,
      <SiFirebase   className="text-yellow-500 size-8"  title="Firebase"   />,
    ],
  },
  {
    img: [gHome, gSearch, gProduct, gCart, gAbout, gContact],
    name: "Gadget Galaxy",
    description: "A modern digital platform to browse, manage, and track gadgets. Sleek interface, fast performance, and scalable architecture in one seamless ecosystem.",
    liveLink: "https://gadget-galaxy-pi.vercel.app/",
    clientCode: "https://github.com/rasel3980/gadget-galaxy",
    technology: [
      <FaReact      className="text-sky-400 size-8"     title="React"      />,
      <SiNextdotjs  className="text-white size-8"       title="Next.js"    />,
      <SiRedux      className="text-[#764abc] size-8"   title="Redux"      />,
      <SiTailwindcss className="text-sky-400 size-8"    title="TailwindCSS"/>,
      <SiFirebase   className="text-yellow-500 size-8"  title="Firebase"   />,
    ],
  },
  {
    img: [vHome, allVisa, visaAdd, vAddedVisa, myVisa],
    name: "Visa Navigator",
    description: "A visa management web application. Users can explore visa requirements, apply for visas, and track their applications with an intuitive interface.",
    liveLink: "https://visa-navigator-7c020.web.app/",
    clientCode: "https://github.com/rasel3980/visa-navigator",
    serverCode: "https://github.com/rasel3980/visa-navigator-server-side",
    technology: [
      <FaReact      className="text-sky-400 size-8"     title="React"      />,
      <SiTailwindcss className="text-sky-400 size-8"    title="TailwindCSS"/>,
      <FaNodeJs     className="text-green-500 size-8"   title="Node.js"    />,
      <SiExpress    className="text-gray-400 size-8"    title="Express.js" />,
      <SiMongodb    className="text-green-600 size-8"   title="MongoDB"    />,
      <SiFirebase   className="text-yellow-500 size-8"  title="Firebase"   />,
    ],
  },
];

const Project: React.FC = () => {
  return (
    <section id="project" className="py-16">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-2">What I've built</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">My Projects</h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-violet-400" />
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;