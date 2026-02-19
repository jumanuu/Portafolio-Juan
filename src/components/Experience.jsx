import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import "../styles/Experience.css";

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section>
      <h3>{t.title}</h3>

      <div className="experience">
        <h4>{t.freelance.title}</h4>
        <p>{t.freelance.role}</p>
        <p>
          {t.freelance.description}
        </p>
      </div>

      <div className="experience">
        <h4>{t.zarza.title}</h4>
        <p>{t.zarza.role}</p>
        <p>
          {t.zarza.description}
        </p>
      </div>
       <div className="experience">
        <h4>{t.codigoGeek.title}</h4>
        <p>{t.codigoGeek.role}</p>
        <p>
          {t.codigoGeek.description}
        </p>
      </div>
    </section>
  );
};

export default Experience;