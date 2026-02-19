import Socials from "./socials";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import "../styles/Animations.css";
import "../styles/Socials.css";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section className="fade-in">
      <h3>{t.title}</h3>
      <p>
        {t.text}
      </p>

      <div className="socials">
        <Socials />
      </div>
    </section>
  );
};

export default About;