import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Slider from "../Components/Slider";

interface ProjectCardProps {
  img: string[];
  name: string;
  description: string;
  liveLink?: string;
  clientCode?: string;
  serverCode?: string;
  technology: React.ReactNode[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img, name, description, liveLink, clientCode, serverCode, technology,
}) => {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/5
      hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/10
      transition-all duration-300 overflow-hidden">

      {/* Slider */}
      <Slider images={img} />

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <h2 className="text-lg font-bold text-white">{name}</h2>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{description}</p>

        {/* Tech icons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {technology?.map((icon, i) => (
            <span key={i}
              className="hover:-translate-y-1 hover:scale-110 transition-transform duration-200">
              {icon}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                bg-gradient-to-r from-emerald-400 to-violet-400 text-gray-900
                hover:-translate-y-0.5 transition-all duration-200">
              <FaExternalLinkAlt /> Live
            </a>
          )}
          {clientCode && (
            <a href={clientCode} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                border border-white/10 bg-white/5 text-gray-300
                hover:border-emerald-400/40 hover:text-white transition-all duration-200">
              <FaGithub /> Client
            </a>
          )}
          {serverCode && (
            <a href={serverCode} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                border border-white/10 bg-white/5 text-gray-300
                hover:border-violet-400/40 hover:text-white transition-all duration-200">
              <FaGithub /> Server
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;