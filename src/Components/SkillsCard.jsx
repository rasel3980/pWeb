
const SkillsCard = ({ icon, title, level }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-3">
      <img src={icon} alt={title} className="w-10 h-10 transition-transform duration-300 hover:-translate-y-2 hover:scale-110 object-contain" />
      <h3 className="text-sm font-medium text-center">{title}</h3>
      <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-600">{level}%</span>
    </div>
  );
};

export default SkillsCard;
