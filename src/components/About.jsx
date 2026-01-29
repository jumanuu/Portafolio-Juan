import Socials from "./socials";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="avatar" />
      <h3>ABOUT ME</h3>
      <p>
        Diseñador gráfico con alrededor de dos años de experiencia combinando
trabajo freelance y experiencia formal, especializado en marcas de e-commerce y venta online. He trabajado en el desarrollo de identidad visual,
branding y diseño web/UI, creando soluciones gráficas alineadas a objetivos
comerciales y experiencia de usuario. Me caracterizo por un enfoque creativo
y estratégico, con capacidad para adaptarme a diferentes marcas, trabajar
por proyectos y cumplir lineamientos visuales en entornos dinámicos y
orientados a resultados.
      </p>

      <div className="socials">
        <Socials />
      </div>
    </motion.section>
  );
};

export default About;