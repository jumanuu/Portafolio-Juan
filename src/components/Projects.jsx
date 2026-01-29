import { useState } from "react";
import GridProjects from "./GridProjects";
import { projects } from "./Projectsdata";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );
  console.log(activeCategory);
  console.log(filteredProjects);
  return (
    <section className="projects">
      <h2>PROJECTS</h2> 

      {/* Botones */}
      <div className="project-filters">
        <button
          className={activeCategory === "frontend" ? "active" : ""}
          onClick={() => setActiveCategory("frontend")}
        >
          Frontend Developer
        </button>

        <button
          className={activeCategory === "video" ? "active" : ""}
          onClick={() => setActiveCategory("video")}
        >
          Video Editor
        </button>

        <button
          className={activeCategory === "graphics" ? "active" : ""}
          onClick={() => setActiveCategory("graphics")}
        >
          Graphics Design
        </button>
        <button
          className={activeCategory === "UX/UI" ? "active" : ""}
          onClick={() => setActiveCategory("UX/UI")}
        >
          UX/UI Design
        </button>
      </div>

      {/* Grid de proyectos */}
      <div className="projects-grid">
        {
        filteredProjects.map((project) => (
          <GridProjects project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;