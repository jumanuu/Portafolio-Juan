import { motion } from "framer-motion";

const Header = () => {
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
            Frontend Developer | Graphic Designer
          </span>
          <h1 className="header-name">Juan Manuel Calderon</h1>
        </div>

        {/* BOTÓN CORRECTO */}
        <motion.a
          href="CV_Juan_Manuel_Calderon_ATS_ES.pdf"
          download
          className="cv-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;