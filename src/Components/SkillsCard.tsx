interface SkillsCardProps {
  icon: string;
  title: string;
  level: number;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ icon, title, level }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 bg-white/5
      hover:border-emerald-400/30 hover:bg-emerald-400/5 transition-all duration-200 group">
      <img
        src={icon}
        alt={title}
        className="w-10 h-10 object-contain group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300"
      />
      <h3 className="text-xs font-medium text-gray-300 text-center">{title}</h3>
      <div className="w-full bg-white/10 h-1.5 rounded-full">
        <div
          className="h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-violet-400 transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
      <span className="text-xs text-gray-500">{level}%</span>
    </div>
  );
};

export default SkillsCard;