import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { db } from "../coments/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import "../styles/FeedbackForm.css";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].feedback;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert(t.selectRating);
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
      alert(t.error);
    } finally {
      setLoading(false);
    }
  };

  const getStarClass = (star) => {
    const isFilled = star <= (hover || rating);
    const isHovered = star <= hover && star > rating;
    return `star ${isFilled ? 'filled' : ''} ${isHovered ? 'hovered' : ''}`;
  };

  return (
    <section className="feedback-section">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="success-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              ✓
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t.success}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t.successMessage}
            </motion.p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="feedback-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="feedback-header-h2">{t.title}</h2>
            
            <label className="rating-label">Tu calificación</label>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.span
                  key={star}
                  className={getStarClass(star)}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {star <= (hover || rating) ? (
                    <AiFillStar />
                  ) : (
                    <AiOutlineStar />
                  )}
                </motion.span>
              ))}
            </div>

            <div className="comment-box">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={t.placeholder}
                rows={4}
                maxLength={500}
                className="comment-input"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading || rating === 0}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="submit-btn"
            >
              {loading ? t.loading : t.submit}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeedbackForm;
