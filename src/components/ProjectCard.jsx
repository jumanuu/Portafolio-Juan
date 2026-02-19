// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProjectCard = ({ title }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="project-thumb" />
      <h5>{title}</h5>
    </motion.div>
  );
};

export default ProjectCard;