import { motion } from "motion/react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import ProjectCard from "./ProjectCard";

import gHome      from "./../assets/projectImg/g-home.png";
import gSearch    from "./../assets/projectImg/g-search.png";
import gProduct   from "./../assets/projectImg/g-products.png";
import gAbout     from "./../assets/projectImg/g-about.png";
import gCart      from "./../assets/projectImg/g-cart.png";
import gContact   from "./../assets/projectImg/g-contact.png";
import htHome     from "./../assets/projectImg/hotel-home.png";
import hBooking   from "./../assets/projectImg/h-booking.png";
import hLogin     from "./../assets/projectImg/h-login.png";
import hRegis     from "./../assets/projectImg/h-regis.png";
import hUpdate    from "./../assets/projectImg/h-update.png";
import hRoom      from "./../assets/projectImg/h-rooms.png";
import vHome      from "./../assets/projectImg/v-home.png";
import vAddedVisa from "./../assets/projectImg/addedMvisa.png";
import myVisa     from "./../assets/projectImg/myVisa.png";
import visaAdd    from "./../assets/projectImg/v-addV.png";
import allVisa    from "./../assets/projectImg/v-allVisa.png";
import GitHubActivity from "../Components/Githubactivity";

interface TechnicalDetail {
  challenge: string;
  solution: string;
  techStack: string[];
}

interface Project {
  img: string[];
  name: string;
  description: string;
  liveLink?: string;
  clientCode?: string;
  serverCode?: string;
  technology: React.ReactNode[];
  builtWithTypeScript?: boolean;
  details?: TechnicalDetail;
}

const PROJECTS: Project[] = [
  {
    img: [htHome, hRoom, hRegis, hBooking, hUpdate, hLogin],
    name: "Room-Rover",
    description: "A fully-functional hotel booking web app. Users can browse rooms, book stays, view room details, post reviews, and manage bookings.",
    liveLink: "https://hotel-booking-platform-b1fc3.web.app/",
    clientCode: "https://github.com/rasel3980/hotel-booking-platform",
    serverCode: "https://github.com/rasel3980/Hotel-Booking-Server",
    builtWithTypeScript: true,
    technology: [
      <FaReact       className="text-sky-400 size-8"    title="React"      />,
      <SiTypescript  className="text-blue-400 size-8"   title="TypeScript" />,
      <SiTailwindcss className="text-sky-400 size-8"    title="Tailwind"   />,
      <FaNodeJs      className="text-green-500 size-8"  title="Node.js"    />,
      <SiExpress     className="text-gray-400 size-8"   title="Express.js" />,
      <SiMongodb     className="text-green-600 size-8"  title="MongoDB"    />,
      <SiFirebase    className="text-yellow-500 size-8" title="Firebase"   />,
    ],
    details: {
      challenge: "Managing complex booking state across multiple steps — room selection, date picking, and payment — without prop drilling.",
      solution: "Used React Context + custom hooks to centralize booking state. JWT-based auth with Firebase for secure session management.",
      techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
    },
  },
  {
    img: [gHome, gSearch, gProduct, gCart, gAbout, gContact],
    name: "Gadget Galaxy",
    description: "A modern digital platform to browse, manage, and track gadgets. Sleek interface, fast performance, and scalable architecture.",
    liveLink: "https://gadget-galaxy-pi.vercel.app/",
    clientCode: "https://github.com/rasel3980/gadget-galaxy",
    builtWithTypeScript: true,
    technology: [
      <FaReact       className="text-sky-400 size-8"    title="React"      />,
      <SiNextdotjs   className="text-white size-8"      title="Next.js"    />,
      <SiTypescript  className="text-blue-400 size-8"   title="TypeScript" />,
      <SiRedux       className="text-[#764abc] size-8"  title="Redux"      />,
      <SiTailwindcss className="text-sky-400 size-8"    title="Tailwind"   />,
      <SiFirebase    className="text-yellow-500 size-8" title="Firebase"   />,
    ],
    details: {
      challenge: "Handling global cart & filter state across multiple Next.js pages with SSR causing hydration mismatches.",
      solution: "Implemented Redux Toolkit with persisted state. Used Next.js dynamic imports to avoid SSR issues with client-only components.",
      techStack: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Firebase"],
    },
  },
  {
    img: [vHome, allVisa, visaAdd, vAddedVisa, myVisa],
    name: "Visa Navigator",
    description: "A visa management web application. Users can explore visa requirements, apply for visas, and track their applications.",
    liveLink: "https://visa-navigator-7c020.web.app/",
    clientCode: "https://github.com/rasel3980/visa-navigator",
    serverCode: "https://github.com/rasel3980/visa-navigator-server-side",
    builtWithTypeScript: true,
    technology: [
      <FaReact       className="text-sky-400 size-8"    title="React"      />,
      <SiTypescript  className="text-blue-400 size-8"   title="TypeScript" />,
      <SiTailwindcss className="text-sky-400 size-8"    title="Tailwind"   />,
      <FaNodeJs      className="text-green-500 size-8"  title="Node.js"    />,
      <SiExpress     className="text-gray-400 size-8"   title="Express.js" />,
      <SiMongodb     className="text-green-600 size-8"  title="MongoDB"    />,
      <SiFirebase    className="text-yellow-500 size-8" title="Firebase"   />,
    ],
    details: {
  challenge: "Managing real-time auth state across protected routes — users applying for visas were losing session data on page refresh, breaking the application flow.",
  solution: "Implemented Firebase onAuthStateChanged with React Context to persist auth state globally. Built a PrivateRoute wrapper to redirect unauthenticated users and preserve their intended destination after login.",
  techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
},
  },
];

const Project: React.FC = () => {
  return (
    <section id="project" className="py-16 space-y-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#38BDF8" }}>
          What I've built
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#F8FAFC" }}>My Projects</h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full"
          style={{ background: "linear-gradient(90deg, #38BDF8, #14B8A6)" }} />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {PROJECTS.map((project, idx) => (
          <motion.div key={project.name}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
      <GitHubActivity username="rasel3980"></GitHubActivity>
    </section>
  );
};

export default Project;