import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import { motion } from "motion/react";
import profile from "../assets/Rasel.png";
import hi from "../assets/animation/HiAnimation - 1751452247067.json";
import Skills from "./Skills";
import Project from "./Project";
import Education from "./Education";
import ContactInfo from "./ContactInfo";
import About from "./About";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  brandColor: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { icon: <FaFacebook />, href: "https://www.facebook.com/share/1DQrSQLQC4/", label: "Facebook", brandColor: "#1877F2" },
  { icon: <FaGithub />,   href: "https://github.com/rasel3980",               label: "GitHub",   brandColor: "#E2E8F0" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rasel80",         label: "LinkedIn", brandColor: "#0A66C2" },
];

const Home: React.FC = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="flex flex-col items-center gap-6">
          <div className="p-[3px] rounded-full"
            style={{ background: "linear-gradient(135deg, #38BDF8, #14B8A6)" }}>
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden"
              style={{ border: "4px solid #0F172A" }}>
              <img src={profile} alt="Rasel Mia"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ icon, href, label, brandColor }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="p-3 rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  color: "#CBD5E1", 
                  border: "1px solid #334155",
                  backgroundColor: "#1E293B",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = brandColor;
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = brandColor;
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${brandColor}20`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#CBD5E1";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#334155";
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1E293B";
                }}>
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 text-center md:text-left space-y-4 max-w-lg">

          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-2xl md:text-3xl font-semibold" style={{ color: "#F8FAFC" }}>Hello</span>
            <Lottie animationData={hi} loop className="h-12 w-12" />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight" style={{ color: "#F8FAFC" }}>
            I'm{" "}
            <span style={{ background: "linear-gradient(135deg, #38BDF8, #14B8A6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Rasel Mia
            </span>
          </h1>

          <div className="text-xl md:text-2xl font-semibold h-8" style={{ color: "#38BDF8" }}>
            <TypeAnimation
              sequence={[500, "Front-End Developer", 1000, "Full Stack Developer", 1000, "MERN Stack Developer"]}
              speed={50} repeat={Infinity} />
          </div>

          <p className="leading-relaxed text-sm md:text-base" style={{ color: "#94A3B8" }}>
            I am a MERN Stack Developer focused on building scalable,
            responsive, and user-friendly web applications.
          </p>

          <a href="/rasel_resume.pdf" download>
            <button className="mt-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #38BDF8, #14B8A6)",
                color: "#0F172A",
                boxShadow: "0 4px 24px rgba(56,189,248,0.25)",
              }}>
              Download Resume ↓
            </button>
          </a>
        </motion.div>
      </section>

      <About />
      <section id="skills"><Skills /></section>
      <section id="project"><Project /></section>
      <Education />
      <ContactInfo />
    </div>
  );
};

export default Home;