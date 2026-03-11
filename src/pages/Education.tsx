import { motion } from "motion/react";
import { HiAcademicCap } from "react-icons/hi2";
import { MdSchool } from "react-icons/md";

interface EducationItem {
  icon: React.ReactNode;
  degree: string;
  institution: string;
  duration: string;
  highlights: string[];
  badge: string;
}

const EDUCATION: EducationItem[] = [
  {
    icon: <HiAcademicCap size={28} />,
    degree: "Diploma in Computer Science",
    institution: "Moulvibazar Polytechnic Institute",
    duration: "2021 – 2025",
    badge: "Completed",
    highlights: [
      "Completed Diploma with a focus on Web Development and Software Engineering.",
      "Hands-on experience with JavaScript, React, Next.js and more.",
      "Built dynamic websites with responsive design and interactive web apps.",
      "Completed full-stack projects integrating front-end and back-end.",
      "Working on personal projects using React, Next.js and Node.js.",
    ],
  },
  {
    icon: <MdSchool size={28} />,
    degree: "Secondary School Certificate (SSC)",
    institution: "Al-Amin High School",
    duration: "2019 – 2020",
    badge: "Completed",
    highlights: [
      "Major Subjects: Mathematics, English and Science.",
      "Achieved an overall score of 90% with strong logical reasoning.",
      "Participated in coding competitions and school web development projects.",
    ],
  },
];

const Education: React.FC = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-2"
          style={{ color: "#38BDF8" }}>
          Background
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#F8FAFC" }}>
          My Education
        </h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full"
          style={{ background: "linear-gradient(90deg, #38BDF8, #14B8A6)" }} />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-5 gap-6">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="flex flex-col rounded-2xl p-6 gap-5 transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: "#1E293B",
              border: "1px solid #334155",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#38BDF8";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 0 30px rgba(56,189,248,0.1), 0 20px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#334155";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 4px 20px rgba(0,0,0,0.3)";
            }}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(20,184,166,0.15))",
                    border: "1px solid rgba(56,189,248,0.2)",
                    color: "#38BDF8",
                  }}>
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold leading-snug" style={{ color: "#F8FAFC" }}>
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium mt-0.5" style={{ color: "#38BDF8" }}>
                    {edu.institution}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(56,189,248,0.1)",
                  color: "#38BDF8",
                  border: "1px solid rgba(56,189,248,0.25)",
                }}>
                {edu.badge}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full"
                style={{ background: "linear-gradient(135deg, #38BDF8, #14B8A6)" }} />
              <span className="text-xs font-medium" style={{ color: "#64748B" }}>
                {edu.duration}
              </span>
            </div>
            <div style={{ borderTop: "1px solid #334155" }} />
            <ul className="space-y-2.5">
              {edu.highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm"
                  style={{ color: "#94A3B8" }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: "#38BDF8" }} />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;