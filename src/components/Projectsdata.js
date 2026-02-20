const BASE_PATH = import.meta.env.DEV ? "" : "/Portafolio-Juan";

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "frontend",
    image: `${BASE_PATH}/IMAGENES/PORTIMG.jpg`,
    link: "https://github.com/jumanuu/Creative-Projects",
    description: "Mi sitio web personal desarrollado con React y Tailwind CSS, diseñado para mostrar mis proyectos y habilidades de manera profesional y atractiva.",
  },
  {
    id: 2,
    title: "Scroll-driven Experience Web App",
    category: "frontend",
    image: `${BASE_PATH}/IMAGENES/dinamicshow.jpg`,
    link: "https://github.com/jumanuu/DinamicShow",
    description: "Una experiencia interactiva donde el scroll controla la narrativa visual. Diseñada y desarrollada con React y Tailwind, enfocada en storytelling y UX.",
  },
  {
    id: 3,
    title: "Zarza Shoots TikTok Video",
    category: "video",
    platform: "tiktok",
    image: `${BASE_PATH}/IMAGENES/ZARZAIMG.jpg`,
    link: "https://www.tiktok.com/@zarza.shoots",
    description: "Zarzashoots es un proyecto nacido en la capital colombiana que captura la esencia del street basketball: intensidad, estilo y cultura urbana.",
  },
  {
    id: 4,
    title: "Swiftmay Reels",
    category: "video",
    platform: "instagram",
    image: `${BASE_PATH}/IMAGENES/SWIFTMAY.jpg`,
    video: `${BASE_PATH}/VIDEOS/Swiftmay FProject 1.mp4`,
    description: "Swiftmay es una empresa dedicada a crear medias veladas pensadas especialmente para personas de color."
  },
  {
    id: 5,
    title: "Hihglights Basketball",
    category: "video",
    platform: "instagram",
    video: `${BASE_PATH}/VIDEOS/CEFE CLIPS.mp4`,
  },
  {
    id: 6,
    title: "Flyers ",
    category: "graphics",
    image: `${BASE_PATH}/IMAGENES/ALUMBRADOS1.png`,
    images: [
      `${BASE_PATH}/IMAGENES/ALUMBRADOS1.png`,
      `${BASE_PATH}/IMAGENES/ALUMBRADOS2.png`,
    ],
    description: "Diseños de flyers promocionales para tours navideños",
  },
  {
    id: 7,
    title: "Flyers Basketball",
    category: "graphics",
    image: `${BASE_PATH}/IMAGENES/5vs5 .jpg`,
    images: [
      `${BASE_PATH}/IMAGENES/3X3 F.jpg`,
      `${BASE_PATH}/IMAGENES/3X3 M.jpg`,
      `${BASE_PATH}/IMAGENES/5vs5 .jpg`,
      `${BASE_PATH}/IMAGENES/PIZZARZABASKET.jpg`,
    ],
    description: "Diseños de flyers promocionales para torneos de baloncesto",
  },
  {
    id: 8,
    title: "Thumbnails",
    category: "graphics",
    image: `${BASE_PATH}/IMAGENES/El texto del párrafo.png`,
    images: [
      `${BASE_PATH}/IMAGENES/El texto del párrafo.png`
    ],
    description: "Diseño de miniatura para videos de YouTube",
  },
  {
    id: 9,
    title: "Beto Honey",
    category: "UX/UI",
    image: `${BASE_PATH}/IMAGENES/BETO-HONEY.jpg`,
    images: [],
    description: "Diseño realizado en Figma para la aplicación móvil de Beto Honey.",
    link: "https://www.figma.com/design/Lhll8Hg0fikUcwftViw0KW/proyects"
  },
  {
    id: 10,
    title: "TestIA",
    category: "UX/UI",
    image: `${BASE_PATH}/IMAGENES/mini-tareas.jpg`,
    images: [],
    description: "TestIA es una plataforma web diseñada para evaluar candidatos a puestos relacionados con desarrollo.",
  }
];
