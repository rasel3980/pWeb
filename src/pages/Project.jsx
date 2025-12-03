import { FaBeer, FaNodeJs, FaReact } from "react-icons/fa"
import gHome from "./../assets/projectImg/g-home.png"
import gSearch from "./../assets/projectImg/g-search.png"
import gProduct from "./../assets/projectImg/g-products.png"
import gAbout from "./../assets/projectImg/g-about.png"
import gCart from "./../assets/projectImg/g-cart.png"
import gContact from "./../assets/projectImg/g-contact.png"
import htHome from "./../assets/projectImg/hotel-home.png"
import hBooking from "./../assets/projectImg/h-booking.png"
import hLogin from "./../assets/projectImg/h-login.png"
import hRegis from "./../assets/projectImg/h-regis.png"
import hUpdate from "./../assets/projectImg/h-update.png"
import hRoom from "./../assets/projectImg/h-rooms.png"
import vHome from "./../assets/projectImg/v-home.png"
import vAddedVisa from "./../assets/projectImg/addedMvisa.png"
import myVisa from "./../assets/projectImg/myVisa.png"
import visaAdd from "./../assets/projectImg/v-addV.png"
import allVisa from "./../assets/projectImg/v-allVisa.png"
import ProjectCard from "./ProjectCard";
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si"

const Project = () => {
  const projects = [
    {
    img:[gHome,gSearch,gProduct,gCart,gAbout,gContact] ,
    name: "Gadget Galaxy" ,
    description: "Gadget Galaxy is a modern digital platform that lets users effortlessly browse, manage, and track gadgets. With a sleek interface, fast performance, and scalable architecture, it centralizes gadget information, discovery, and integrations into one seamless ecosystem.",
    liveLink:'https://gadget-galaxy-pi.vercel.app/',
    clientCode:'https://github.com/rasel3980/gadget-galaxy',
    technology :[
      <FaReact className="text-sky-400 size-10" title="React"></FaReact>,
      <SiNextdotjs className="text-black size-10" title="Nextjs" />,
      <SiRedux className="text-[#764abc] size-10" title="Redux" />,
      <SiTailwindcss className="text-sky-400 size-10" title="TailwindCSS" />,
      <SiFirebase className="text-yellow-500 size-10" title="Firebase" />,
    ]
  },
    {
    img:[htHome,hRoom,hRegis, hBooking,hUpdate,hLogin] ,
    name: "Room-Rover" ,
    description: "A fully-functional hotel booking web application that allows users to browse rooms, book their stays, view room details, post reviews, and manage bookings.",
    liveLink:'https://hotel-booking-platform-b1fc3.web.app/',
    clientCode:'https://github.com/rasel3980/hotel-booking-platform',
    serverCode:'https://github.com/rasel3980/Hotel-Booking-Server',
    technology :[
      <FaReact className="text-sky-400 size-10" title="React"></FaReact>,
      <SiTailwindcss className="text-sky-400 size-10" title="TailwindCSS" />,
      <FaNodeJs className="text-green-500 size-10" title="Node.js" />,
      <SiExpress className="text-gray-500 size-10" title="Express.js" />,
      <SiMongodb className="text-green-600 size-10" title="MongoDB" />,
      <SiFirebase className="text-yellow-500 size-10" title="Firebase" />,
    ]
  },
    {
    img:[vHome,allVisa,visaAdd,vAddedVisa,myVisa] ,
    name: "Visa Navigator" ,
    description: "The Spanish Vocabulary Project is a web application designed to help users learn and practice Spanish vocabulary. The app offers various features such as learning new words, testing your vocabulary knowledge, and tracking your learning progress",
    liveLink:'https://visa-navigator-7c020.web.app/',
    clientCode:'https://github.com/rasel3980/visa-navigator',
    serverCode:'https://github.com/rasel3980/visa-navigator-server-side',
    technology :[
      <FaReact className="text-sky-400 size-10" title="React"></FaReact>,
      <SiTailwindcss className="text-sky-400 size-10" title="TailwindCSS" />,
      <FaNodeJs className="text-green-500 size-10" title="Node.js" />,
      <SiExpress className="text-gray-500 size-10" title="Express.js" />,
      <SiMongodb className="text-green-600 size-10" title="MongoDB" />,
      <SiFirebase className="text-yellow-500 size-10" title="Firebase" />,
    ]
  },
  ]
  return (
    <div className="md:my-8 my-3">
      <h1 className="text-center font-semibold md:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-600 to-pink-600">My Projects</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:mt-10 mt-5 gap-5">
        {
        projects.map((p)=>(
          <ProjectCard key={p.name} img={p.img} name={p.name} description={p.description} liveLink={p.liveLink} clientCode={p.clientCode} serverCode={p.serverCode} technology={p.technology}/>
        ))
      }
      </div>
    </div>
  );
};

export default Project;
