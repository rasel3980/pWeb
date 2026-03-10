interface SkillsCardProps { icon: string; title: string; level: number; }

const SkillsCard: React.FC<SkillsCardProps> = ({ icon, title, level }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200 group cursor-default"
      style={{ backgroundColor: "#1E293B", border: "1px solid #334155" }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "#38BDF8")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "#334155")}>

      <img src={icon} alt={title}
        className="w-10 h-10 object-contain group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" />

      <h3 className="text-xs font-semibold text-center" style={{ color: "#CBD5E1" }}>{title}</h3>

      <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: "#0F172A" }}>
        <div className="h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${level}%`, background: "linear-gradient(90deg, #38BDF8, #14B8A6)" }} />
      </div>

      <span className="text-xs font-medium" style={{ color: "#38BDF8" }}>{level}%</span>
    </div>
  );
};

export default SkillsCard;