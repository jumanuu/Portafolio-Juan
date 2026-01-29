import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.span
          key={star}
          className="star"
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          whileHover={{ scale: 1.2 }}
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
  );
};

export default Rating;