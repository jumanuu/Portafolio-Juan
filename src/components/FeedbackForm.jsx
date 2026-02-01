import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { db } from "../coments/firebase";  // ← Importación desde tu carpeta
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Por favor, selecciona una calificación");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "feedback"), {
        rating: rating,
        comment: comment,
        timestamp: serverTimestamp(),
        date: new Date().toISOString()
      });
      
      setSubmitted(true);
      setRating(0);
      setComment("");
      setHover(0);
    } catch (error) {
      console.error("Error al enviar feedback:", error);
      alert("Error al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="feedback-section p-t-2 p-b-2 mb-3 text-center text-white text-sm m-[10px]">
      <div className="feedback-header"><h2 className="text-xl font-bold mb-2 text-white">Con el fin de mejorar continuamente el portafolio, te invito a
        calificarlo y dejar un comentario.</h2></div>
      
      {submitted ? (
        <div className="success-message">
          <h3>¡Gracias por tu feedback! ✨</h3>
          <p>Tus comentarios son muy valiosos.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          {/* Estrellas */}
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.span
                key={star}
                className="star"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{ cursor: "pointer", fontSize: "2rem" }}
              >
                {star <= (hover || rating) ? (
                  <AiFillStar color="#e4bcfb" />
                ) : (
                  <AiOutlineStar color="#241b36" />
                )}
              </motion.span>
            ))}
          </div>

          {/* Textarea para comentario */}
          <div className="comment-box">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Escribe tu comentario aquí..."
              rows={4}
              maxLength={500}
              className="comment-input"
            />
          </div>

          {/* Botón de enviar */}
          <div><motion.button
            type="submit"
            disabled={loading || rating === 0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="submit-btn"
          >
            {loading ? "Enviando..." : "Enviar Feedback"}
          </motion.button>
          </div>
        </form>
      )}
    </section>
  );
};

export default FeedbackForm;