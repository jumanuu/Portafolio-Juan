import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineMail } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://github.com/jumanuu" target="_blank" rel="noopener noreferrer">
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/in/juan-calderon-b56242308/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin />
      </a>
      <a href="https://www.instagram.com/juancalderon_amaya/" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram />
      </a>
      <a href="mailto:caldeonjuan28@gmail.com" target="_blank" rel="noopener noreferrer">
        <AiOutlineMail />
      </a>
    </div>
  );
};

export default Socials;