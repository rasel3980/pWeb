
import Slider from "../Components/Slider";

const ProjectCard = ({
  img,
  name,
  description,
  liveLink,
  clientCode,
  serverCode,
  technology,
}) => {
  return (
    <div>
      <div className="card h-[560px] bg-base-100 hover:md:shadow-xl hover:shadow-lg hover:shadow-red-500">
        <figure>
          <Slider className="object-contain w-full h-full" images={img}></Slider>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-center gap-3">
          {
            technology?.map((icon,i)=>(
              <span className="transition-transform duration-300 hover:-translate-y-2 hover:scale-110" key={i}>{icon}</span>
            ))
          }
          </div>
        </div>
          <div className="text-center">
            <div className="mb-5 flex justify-center gap-6">
              {liveLink && (
                <button className="btn btn-primary">
                  <a href={liveLink}>Live Link</a>
                </button>
              )}
              {clientCode && (
                <button className="btn btn-primary">
                  <a href={clientCode}>Client Code</a>
                </button>
              )}
              {serverCode && (
                <button className="btn btn-primary">
                  <a href={serverCode}>Server Code</a>
                </button>
              )}
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
