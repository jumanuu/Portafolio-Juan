// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import "../styles/Header.css";

const BASE_PATH = import.meta.env.DEV ? "" : "/Portafolio-Juan";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].header;

  return (
    <motion.header
      className="header-band"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-content">
        <div>
          <span className="header-role">
            {t.role}
          </span>
          <h1 className="header-name">{t.name}</h1>
        </div>

        <div className="header-actions">
          <motion.a
            href={`${BASE_PATH}/CV_Juan_Manuel_Calderon_ATS_ES.pdf`}
            download
            className="cv-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.downloadCV}
          </motion.a>

          <button
            onClick={toggleLanguage}
            className="language-toggle"
          >
            <Globe size={16} />
            {translations[language].language.switch}
          </button>
        </div>
      </div>
    </motion.header>
  );
};
 
export default Header;