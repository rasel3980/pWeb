import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SkillsCard from "../Components/SkillsCard";

import html       from ".././assets/html.svg";
import css        from ".././assets/css.svg";
import tailwind   from ".././assets/tailwind.svg";
import js         from "../assets/js.svg";
import react      from "../assets/react2.svg";
import next       from "../assets/Next.jpeg";
import typescript from "../assets/typescript.png";
import node       from ".././assets/node.svg";
import firebase   from ".././assets/firebase.svg";
import mongodb    from "../assets/mongodb.svg";
import express    from "../assets/express.png";
import github     from "../assets/github.svg";
import figma      from "../assets/figma.png";
import netlify    from "../assets/netlify.png";
import vercel     from "../assets/Vercel.svg";
import redux      from "../assets/redux.png";

interface Skill         { icon: string; title: string; level: number; }
interface SkillCategory { label: string; skills: Skill[]; }

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { icon: html,       title: "HTML",       level: 90 },
      { icon: css,        title: "CSS",        level: 85 },
      { icon: tailwind,   title: "Tailwind",   level: 85 },
      { icon: js,         title: "JavaScript", level: 80 },
      { icon: react,      title: "React",      level: 80 },
      { icon: next,       title: "Next.js",    level: 75 },
      { icon: redux,      title: "Redux",      level: 85 },
      { icon: typescript, title: "TypeScript", level: 90 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: node,     title: "Node.js",    level: 77 },
      { icon: express,  title: "Express.js", level: 75 },
      { icon: mongodb,  title: "MongoDB",    level: 85 },
      { icon: firebase, title: "Firebase",   level: 85 },
    ],
  },
  {
    label: "Other",
    skills: [
      { icon: github,  title: "GitHub",  level: 85 },
      { icon: figma,   title: "Figma",   level: 85 },
      { icon: netlify, title: "Netlify", level: 85 },
      { icon: vercel,  title: "Vercel",  level: 85 },
    ],
  },
];

const Skills: React.FC = () => {
  const [selected, setSelected] = useState<SkillCategory>(SKILL_CATEGORIES[0]);

  return (
    <section id="skills">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#38BDF8" }}>
          What I know
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#F8FAFC" }}>My Skills</h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full"
          style={{ background: "linear-gradient(90deg, #38BDF8, #14B8A6)" }} />
      </motion.div>
      <div className="flex justify-center gap-3 mb-8">
        {SKILL_CATEGORIES.map((cat) => (
          <button key={cat.label} onClick={() => setSelected(cat)}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={
              selected.label === cat.label
                ? {
                    background: "linear-gradient(135deg, #38BDF8, #14B8A6)",
                    color: "#0F172A",
                    boxShadow: "0 4px 16px rgba(56,189,248,0.3)",
                  }
                : {
                    backgroundColor: "#1E293B",
                    border: "1px solid #334155",
                    color: "#94A3B8",
                  }
            }
            onMouseEnter={e => {
              if (selected.label !== cat.label)
                (e.currentTarget as HTMLButtonElement).style.color = "#F8FAFC";
            }}
            onMouseLeave={e => {
              if (selected.label !== cat.label)
                (e.currentTarget as HTMLButtonElement).style.color = "#94A3B8";
            }}>
            {cat.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={selected.label}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {selected.skills.map((skill, idx) => (
            <motion.div key={skill.title}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.3 }}>
              <SkillsCard icon={skill.icon} title={skill.title} level={skill.level} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;