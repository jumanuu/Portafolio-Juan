import { useState, useEffect } from 'react';
import { db } from '../coments/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Footer() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();
  const t = translations[language].footer;

  useEffect(() => {
    const q = query(collection(db, 'feedback'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(list);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <footer>
      <div className="comments-section">
        <h3>{t.commentsTitle}</h3>
        <p className="comments-subtitle">{t.commentsSubtitle}</p>

        {loading ? (
          <p className="loading-text">{t.loadingComments}</p>
        ) : comments.length === 0 ? (
          <p className="no-comments-text">{t.noComments}</p>
        ) : (
          <div className="comments-grid">
            {comments.map((comment) => {
              const rating = Number(comment.rating) || 0;

              return (
                <div
                  key={comment.id}
                  className="comment-card"
                >
                  <div className="comment-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>

                  <p className="comment-text">
                    {comment.comment || t.noCommentText}
                  </p>

                  {comment.timestamp && (
                    <p className="comment-date">
                      {comment.timestamp.toDate().toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="footer-final">
        <p className="footer-thanks">{t.thanks}</p>

        <p className="footer-message">
          {t.message.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <h3 className="footer-cta">
          {t.cta} <span className="highlight">{t.ctaHighlight}</span>
        </h3>
      </div>
    </footer>
  );
}
