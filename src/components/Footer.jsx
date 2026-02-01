import { useState, useEffect } from 'react';
import { db } from '../coments/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

export default function Footer() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <footer className="w-full mt-40">
      {/* ============================= */}
      {/* SECCIÓN COMENTARIOS */}
      {/* ============================= */}
      <section className="w-full bg-yellow-400 text-black py-24">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mb-12">
            <h3 className="text-3xl font-bold mb-3">
              Lo que dicen los visitantes
            </h3>
            <p className="text-black/70">
              Opiniones reales de personas que pasaron por aquí
            </p>
          </header>

          {loading ? (
            <p>Cargando comentarios...</p>
          ) : comments.length === 0 ? (
            <p>No hay comentarios todavía.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {comments.map((comment) => {
                const rating = Number(comment.rating) || 0;

                return (
                  <div
                    key={comment.id}
                    className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {/* estrellas */}
                    <div className="mb-3 text-lg">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < rating ? '★' : '☆'}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm leading-relaxed">
                      {comment.comment}
                    </p>

                    {comment.timestamp && (
                      <p className="mt-4 text-xs text-black/50">
                        {comment.timestamp
                          .toDate()
                          .toLocaleDateString('es-ES')}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN FINAL */}
      {/* ============================= */}
      <section className="w-full bg-blue-600 text-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-widest text-white/70 mb-4">
            GRACIAS POR LA VISITA
          </p>

         

          <p className="max-w-xl text-white/90 leading-relaxed">
            Si llegaste hasta aquí, gracias por tomarte el tiempo.
            <br />
            Estoy construyendo mi camino como{' '}
            <strong>Frontend Developer</strong> y{' '}
            <strong>Graphic Designer</strong>.
          </p>
          <h3 className="text-4xl font-bold mb-6">
            Hagamos algo <span className="text-white">GRANDE!</span>
          </h3>
        </div>
      </section>
    </footer>
  );
}