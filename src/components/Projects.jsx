import { useState } from "react";
import GridProjects from "./GridProjects";
import { projects } from "./Projectsdata";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const { language } = useLanguage();
  const t = translations[language].projects;

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  const categories = ["frontend", "video", "graphics", "UX/UI"];

  return (
    <section className="projects">
      <h2>{t.title}</h2>

      {/* Botones */}
      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {t.categories[category]}
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <GridProjects key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;