import React from "react";
import { motion } from "motion/react";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";

interface GitHubActivityProps {
  username: string;
}

const GitHubActivity: React.FC<GitHubActivityProps> = ({ username }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#38BDF8" }}>
          Open Source
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#F8FAFC" }}>
          GitHub Activity
        </h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full" 
             style={{ background: "linear-gradient(90deg, #38BDF8, #14B8A6)" }} />
      </div>
      <div className="rounded-2xl p-6" 
           style={{ backgroundColor: "#1E293B", border: "1px solid #334155" }}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(56,189,248,0.1)" }}>
              <FaGithub size={18} style={{ color: "#38BDF8" }} />
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: "#F8FAFC" }}>
                Contribution Graph
              </p>
              <p className="text-xs" style={{ color: "#64748B" }}>Last 12 months</p>
            </div>
          </div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: "rgba(56,189,248,0.1)",
              color: "#38BDF8",
              border: "1px solid rgba(56,189,248,0.2)",
            }}
          >
            @{username}
          </a>
        </div>
        <div className="mb-5" style={{ borderTop: "1px solid #334155" }} />
        <div className="overflow-x-auto pb-2">
          <GitHubCalendar
            username={username}
            colorScheme="dark"
            theme={{
              dark: ["#0F172A", "#164E63", "#0E7490", "#0284C7", "#38BDF8"],
            }}
            fontSize={12}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default GitHubActivity;