import Rating from "./Rating";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="footer-title">CALIFICA</h4>

      <p className="footer-text">
        Con el fin de mejorar continuamente el portafolio, te invito a
        calificarlo y dejar un comentario.
      </p>

      <Rating />

      <div className="comment-wrapper">
        <textarea
          placeholder="Write your comment here..."
          className="comment-input"
          rows="2"
        />

        <button className="send-btn" aria-label="Send comment">
          <FiSend />
        </button>
      </div>
    </footer>
  );
};

export default Footer;