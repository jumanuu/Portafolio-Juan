import { useEffect, useState } from "react";

function GridProjects({ project }) {
  const isVideo = project.category === "video";
  const isGallery = Array.isArray(project.images) && project.images.length > 0;
  const hasVideo = Boolean(project.video);
  const hasImage = Boolean(project.image);

  const [thumb, setThumb] = useState(null);
  const [openVideo, setOpenVideo] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const effectiveThumb = hasImage ? project.image : thumb;

  /* 🎬 Miniatura desde video */
  useEffect(() => {
    if (!hasImage && hasVideo) {
      const video = document.createElement("video");
      video.src = project.video;
      video.muted = true;
      video.preload = "metadata";

      video.onloadedmetadata = () => {
        video.currentTime = Math.min(1, video.duration - 0.5);
      };

      video.onseeked = () => {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas
          .getContext("2d")
          .drawImage(video, 0, 0, canvas.width, canvas.height);
        setThumb(canvas.toDataURL("image/png"));
      };
    }
  }, [project, hasImage, hasVideo]);

  /* 🔄 Navegación galería */
  const nextImage = () => {
    setCurrentImage((i) =>
      i === project.images.length - 1 ? 0 : i + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((i) =>
      i === 0 ? project.images.length - 1 : i - 1
    );
  };

  return (
    <>
      <div className="project-card">
        {/* Thumbnail */}
        <div className="project-thumb">
          {effectiveThumb ? (
            <img
              src={effectiveThumb}
              alt={project.title}
              className="project-image-img"
            />
          ) : (
            <div className="thumb-placeholder">No preview: {project.title}</div>
          )}
        </div>

        {/* Acción */}
        {isVideo && hasVideo ? (
          <button
            className="project-action"
            onClick={() => setOpenVideo(true)}
          >
            <span className="btn-text">{project.title}</span>
            <span className="btn-play">▶</span>
          </button>
        ) : isGallery ? (
          <button
            className="project-action"
            onClick={() => {
              setCurrentImage(0);
              setOpenGallery(true);
            }}
          >
            <span className="btn-text">{project.title}</span>
            <span className="btn-play">🖼</span>
          </button>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-action"
          >
            <span className="btn-text">{project.title}</span>
            <span className="btn-play">▶</span>
          </a>
        )}

        {/* Descripción */}
        {project.description && (
          <p className="project-description">{project.description}</p>
        )}
      </div>

      {/* 🎥 MODAL VIDEO */}
      {openVideo && (
        <div className="video-modal">
          <div
            className="video-backdrop"
            onClick={() => setOpenVideo(false)}
          />
          <div className="video-container">
            <button
              className="video-close"
              onClick={() => setOpenVideo(false)}
            >
              ✕
            </button>
            <video
              src={project.video}
              controls
              autoPlay
              className="video-player"
            />
          </div>
        </div>
      )}

      {/* 🖼️ MODAL GALERÍA */}
      {openGallery && (
        <div className="gallery-modal">
          <div
            className="gallery-backdrop"
            onClick={() => setOpenGallery(false)}
          />

          <div className="gallery-container">
            <button
              className="gallery-close"
              onClick={() => setOpenGallery(false)}
            >
              ✕
            </button>

            <button className="gallery-nav left" onClick={prevImage}>
              ◀
            </button>

            <img
              src={project.images[currentImage]}
              alt={`Imagen ${currentImage + 1}`}
              className="gallery-image"
            />

            <button className="gallery-nav right" onClick={nextImage}>
              ▶
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default GridProjects;