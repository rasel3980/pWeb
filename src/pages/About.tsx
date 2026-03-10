import Lottie from "lottie-react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { FaCode, FaServer, FaTools, FaLayerGroup } from "react-icons/fa";
import animation from "../assets/animation/Animation - 1742809656451.json";

interface TechCategory { icon: React.ReactNode; label: string; items: string[]; }

const TECH: TechCategory[] = [
  { icon: <FaCode />,       label: "Frontend",          items: ["HTML", "CSS", "Tailwind", "JavaScript", "TypeScript", "React.js"] },
  { icon: <FaServer />,     label: "Backend",           items: ["Node.js", "Express.js", "MongoDB"] },
  { icon: <FaTools />,      label: "Tools & Platforms", items: ["Firebase", "Vercel", "Netlify", "Surge", "GitHub"] },
  { icon: <FaLayerGroup />, label: "Libraries",         items: ["Tanstack Query", "Axios", "Redux", "Next.js"] },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const About: React.FC = () => {
  return (
    <section id="about" className="md:py-16 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#38BDF8" }}>Who I am</p>
        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#F8FAFC" }}>About Me</h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full"
          style={{ background: "linear-gradient(90deg, #38BDF8, #14B8A6)" }} />
      </motion.div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="space-y-3 leading-relaxed text-sm md:text-base" style={{ color: "#94A3B8" }}>
            <p>
              Hello, I'm <span className="font-semibold" style={{ color: "#F8FAFC" }}>Rasel Mia</span>, an enthusiastic
              web developer skilled in building modern and scalable web applications. Currently learning{" "}
              <span className="font-medium" style={{ color: "#38BDF8" }}>Next.js</span> and{" "}
              <span className="font-medium" style={{ color: "#38BDF8" }}>Redux</span>.
            </p>
            <p>I'm passionate about creating web applications that enhance user experience.</p>
            <p>
              Want to collaborate?{" "}
              <a href="mailto:rkrasel3980@gmail.com" className="underline underline-offset-2"
                style={{ color: "#38BDF8" }}>
                rkrasel3980@gmail.com
              </a>
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TECH.map(({ icon, label, items }, i) => (
              <motion.div key={label} custom={i} initial="hidden"
                whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="p-4 rounded-xl space-y-3 transition-all duration-200"
                style={{
                  backgroundColor: "#1E293B",
                  border: "1px solid rgba(56,189,248,0.2)",
                }}>
                <div className="flex items-center gap-2 text-sm font-bold"
                  style={{ color: "#38BDF8" }}>
                  <span className="text-base">{icon}</span>
                  <span>{label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "rgba(56,189,248,0.1)",
                        color: "#CBD5E1",
                        border: "1px solid rgba(56,189,248,0.15)",
                      }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex-1 max-w-xs md:max-w-sm w-full">
          <Lottie animationData={animation} loop className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;