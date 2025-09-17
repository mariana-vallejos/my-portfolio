import { useRef, useEffect } from "react";
import { projects } from "../assets/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault(); 
      el.scrollLeft += e.deltaY; 
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="py-20 px-10 my-10">
      <h2 className="text-3xl font-semibold text-center">My Projects</h2>
      {projects.length === 0 ? (
        <div>No projects to show yet!</div>
      ) : (
        <div className="w-full py-12 px-6 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-snap-x mandatory -mx-4 px-4 py-3"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex-shrink-0 scroll-snap-center transform transition-transform duration-300 hover:scale-105"
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
