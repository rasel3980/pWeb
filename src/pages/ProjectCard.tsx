import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import Slider from "../Components/Slider";

interface TechnicalDetail {
  challenge: string;
  solution: string;
  techStack: string[];
}

interface ProjectCardProps {
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

const ProjectCard: React.FC<ProjectCardProps> = ({
  img, name, description, liveLink, clientCode, serverCode,
  technology, builtWithTypeScript, details,
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col rounded-xl transition-all duration-300 hover:-translate-y-2"
      style={{
        backgroundColor: "#1E293B",
        border: "1px solid #334155",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "#38BDF8";
        e.currentTarget.style.boxShadow = "0 0 30px rgba(56,189,248,0.15), 0 20px 40px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#334155";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
      }}>
      <div className="relative rounded-t-xl overflow-hidden">
        <Slider images={img} />
        {builtWithTypeScript && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
            style={{ backgroundColor: "#3178C6", color: "#fff" }}>
            <SiTypescript size={12} />
            TypeScript
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-lg font-bold" style={{ color: "#F8FAFC" }}>{name}</h2>
          {builtWithTypeScript && (
            <span className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded"
              style={{ backgroundColor: "rgba(49,120,198,0.15)", color: "#60A5FA", border: "1px solid rgba(49,120,198,0.3)" }}>
              .tsx
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "#94A3B8" }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {technology?.map((icon, i) => (
            <span key={i} className="hover:-translate-y-1 hover:scale-110 transition-transform duration-200">
              {icon}
            </span>
          ))}
        </div>
        {details && (
          <div>
            <button
              onClick={() => setShowDetails(v => !v)}
              className="flex items-center gap-2 text-xs font-semibold w-full py-2 transition-colors duration-200"
              style={{ color: "#38BDF8", borderTop: "1px solid #334155" }}>
              {showDetails ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
              {showDetails ? "Hide" : "Show"} Technical Details
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${showDetails ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="space-y-3 text-xs rounded-lg p-3 mt-1"
                style={{ backgroundColor: "#0F172A", border: "1px solid rgba(56,189,248,0.3)" }}>

                <div>
                  <p className="font-bold mb-1" style={{ color: "#F472B6" }}>⚡ Challenge</p>
                  <p style={{ color: "#94A3B8" }}>{details.challenge}</p>
                </div>

                <div>
                  <p className="font-bold mb-1" style={{ color: "#34D399" }}>✅ Solution</p>
                  <p style={{ color: "#94A3B8" }}>{details.solution}</p>
                </div>

                <div>
                  <p className="font-bold mb-2" style={{ color: "#38BDF8" }}>🛠 Tech Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {details.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "rgba(56,189,248,0.1)", color: "#CBD5E1", border: "1px solid rgba(56,189,248,0.2)" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-wrap gap-2 pt-3 mt-auto" style={{ borderTop: "1px solid #334155" }}>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #38BDF8, #14B8A6)", color: "#0F172A" }}>
              <FaExternalLinkAlt /> Live
            </a>
          )}
          {clientCode && (
            <a href={clientCode} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#0F172A", border: "1px solid #334155", color: "#CBD5E1" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = "#38BDF8"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = "#334155"}>
              <FaGithub /> Client
            </a>
          )}
          {serverCode && (
            <a href={serverCode} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#0F172A", border: "1px solid #334155", color: "#CBD5E1" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = "#38BDF8"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = "#334155"}>
              <FaGithub /> Server
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;