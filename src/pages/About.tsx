import Lottie from "lottie-react";
import { motion } from "motion/react";
import { FaCode, FaServer, FaTools, FaLayerGroup } from "react-icons/fa";
import animation from "../assets/animation/Animation - 1742809656451.json";
import type { Variants } from "motion/react";

interface TechCategory {
  icon: React.ReactNode;
  label: string;
  items: string;
}

const TECH: TechCategory[] = [
  { icon: <FaCode />,     label: "Frontend",             items: "HTML, CSS, Tailwind, JavaScript, TypeScript, React.js" },
  { icon: <FaServer />,   label: "Backend",              items: "Node.js, Express.js, MongoDB" },
  { icon: <FaTools />,    label: "Tools & Platforms",    items: "Firebase, Vercel, Netlify, Surge, GitHub" },
  { icon: <FaLayerGroup />, label: "Libraries",          items: "Tanstack Query, Axios, Redux (learning), Next.js (learning)" },
];

const fadeUp:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-2">Who I am</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">About Me</h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-violet-400" />
      </motion.div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Text side */}
        <div className="flex-1 space-y-6">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3 text-gray-400 leading-relaxed text-sm md:text-base"
          >
            <p>
              Hello, I'm <span className="text-white font-semibold">Rasel Mia</span>, an enthusiastic
              web developer skilled in building modern and scalable web applications. I am currently
              learning <span className="text-emerald-400 font-medium">Next.js</span> and{" "}
              <span className="text-emerald-400 font-medium">Redux</span>.
            </p>
            <p>
              I'm passionate about creating web applications that enhance user experience. My goal is
              to continually grow my technical skills in web development.
            </p>
            <p>
              Want to collaborate?{" "}
              <a href="mailto:rkrasel3980@gmail.com"
                className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 transition-colors">
                rkrasel3980@gmail.com
              </a>
            </p>
          </motion.div>

          {/* Tech stack cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TECH.map(({ icon, label, items }, i) => (
              <motion.div
                key={label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-emerald-400/30
                  hover:bg-emerald-400/5 transition-all duration-200 space-y-1.5"
              >
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                  {icon}
                  <span>{label}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{items}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lottie animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 max-w-xs md:max-w-sm w-full"
        >
          <Lottie animationData={animation} loop className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;