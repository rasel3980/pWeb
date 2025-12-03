import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import html from ".././assets/html.svg";
import css from ".././assets/css.svg";
import tailwind from ".././assets/tailwind.svg";
import js from "../assets/js.svg";
import react from "../assets/react2.svg";
import next from "../assets/Next.jpeg";
import typescript from "../assets/typescript.png";
import node from ".././assets/node.svg";
import firebase from ".././assets/firebase.svg";
import mongodb from "../assets/mongodb.svg";
import express from "../assets/express.png";
import github from "../assets/github.svg";
import figma from "../assets/figma.png";
import netlify from "../assets/netlify.png";
import vercel from "../assets/Vercel.svg";
import redux from "../assets/redux.png"
import SkillsCard from "../Components/SkillsCard";

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { icon: html, title: "HTML", level: 90 },
      { icon: css, title: "CSS", level: 85 },
      { icon: tailwind, title: "Tailwind", level: 85 },
      { icon: js, title: "JavaScript", level: 80 },
      { icon: react, title: "React", level: 80 },
      { icon: next, title: "Next.js", level: 75 },
      { icon: redux, title: "Redux", level: 85 },
      { icon: typescript, title: "TypeScript", level: 75 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: node, title: "Node.js", level: 77 },
      { icon: express, title: "Express.js", level: 75 },
      { icon: mongodb, title: "MongoDB", level: 85 },
      { icon: firebase, title: "Firebase", level: 85 },
    ],
  },
  {
    label: "Other",
    skills: [
      { icon: github, title: "GitHub", level: 85 },
      { icon: figma, title: "Figma", level: 85 },
      { icon: netlify, title: "Netlify", level: 85 },
      { icon: vercel, title: "Vercel", level: 85 },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]);

  return (
    <section id="skills" className="mx-auto">
      <h1 className="font-semibold md:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-600 to-pink-600 text-center md:mb-8 mb-5">My Skills</h1>
      <div className="flex gap-8 md:mb-6 mb-3 justify-center">
        {
          skillCategories.map((category)=>(
            <button onClick={()=>setSelectedCategory(category)} className={`font-medium text-lg ${selectedCategory.label===category.label?"btn btn-primary ":"btn hover:bg-gray-700 hover:text-white"}`}>{category.label}</button>
          )
            
          )
        }
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:flex md:gap-10 mx-auto p-3 rounded grid grid-cols-4 md:justify-center"
        >
          {selectedCategory.skills.map((skill, idx) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <SkillsCard
                icon={skill.icon}
                title={skill.title}
                level={skill.level}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
