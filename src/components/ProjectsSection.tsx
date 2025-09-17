import { projects } from "../assets/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="py-20 px-10">
      <h2 className="text-2xl font-semibold text-center">My Projects</h2>
      <div className="pt-10 pb-5 flex gap-3">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
            id={project.id}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
