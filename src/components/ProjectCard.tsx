import { CiLink } from "react-icons/ci";
import type { Project } from "../assets/data/projects";

const ProjectCard = ({ title, description, image, link }: Project) => {
  return (
    <div className="w-96 px-4 py-2 relative bg-cyan-200/40 rounded-[30px] shadow-[0px_45.90865707397461px_45.90865707397461px_0px_rgba(69,42,124,0.15)] outline-[1.53px] outline-offset-[-1.53px] outline-white/60 backdrop-blur-[10px] overflow-hidden">
      <img src={image} alt={`${title} image`} className="h-72 rounded-md mb-4" />
      <div className="flex flex-col items-center">
      <h4 className="font-semibold text-center">{title}</h4>
      <p>{description}</p>

        <a
          href={link}
          target="_blank"
          className="bg-dark3 w-24 rounded-md py-3 my-3 flex gap-1 items-center justify-center"
        >
          <CiLink /> See
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;
