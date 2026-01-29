import { desc, image, video } from "framer-motion/client";

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "frontend",
    image: "/projects/frontend1.png",
    
  },
  {
    id: 2,
    title: "Scroll-driven Experience Web App",
    category: "frontend",
    image: "/projects/frontend2.png",
    description: "Una experiencia interactiva donde el scroll controla la narrativa visual. Diseñada y desarrollada con React y Tailwind, enfocada en storytelling y UX.",
  },
  {
    id: 3,
    title: "Zarza Shoots TikTok Video",
    category: "video",
    platform: "tiktok",
    image: "/IMAGENES/ZARZAIMG.jpg",
    link: "https://www.tiktok.com/@zarza.shoots",
    description: "Zarzashoots es un proyecto nacido en la capital colombiana que captura la esencia del street basketball: intensidad, estilo y cultura urbana. El proyecto transforma cada jugada en una historia, destacando el ritmo, la actitud y la identidad del street basketball. Zarzashoots no solo documenta el juego, sino que amplifica la voz de la calle y su cultura. En esta plataforma encontrarás contenido de baloncesto de alto nivel y acceso a eventos exclusivos que celebran el deporte desde su forma más real.",
  },
  {
    id: 4,
    title: "Swiftmay Reels",
    category: "video",
    platform: "instagram",
    image: "/IMAGENES/SWIFTMAY.jpg",
    video: "/VIDEOS/Swiftmay FProject 1.mp4",
    description: "Swiftmay es una empresa dedicada a crear medias veladas pensadas especialmente para personas de color, ofreciendo una amplia variedad de tonalidades de piel y niveles de compresión, incluyendo opciones de compresión especializada.Con una estética limpia y minimalista, este proyecto se enfoca en resaltar el producto desde su funcionalidad y elegancia, mostrando su uso de forma clara, natural y visualmente atractiva."
  },
  {
     id: 5,
    title: "Hihglights Basketball",
    category: "video",
    platform: "instagram",
    video: "/VIDEOS/CEFE CLIPS.mp4",
  },
  {
    id: 6,
    title: "Flyers ",
    category: "graphics",
    image: ["/IMAGENES/ALUMBRADOS1.png"],
    images: [
    "/IMAGENES/ALUMBRADOS1.png",
    "/IMAGENES/ALUMBRADOS2.png",
    ],
    description: "Diseños de flyers promocionales para tours navideños",
  },
  {
    id: 7,
    title: "Flyers Basketball",
    category: "graphics",
    image: ["/IMAGENES/5vs5 .jpg"],
    images: [
    "/IMAGENES/3X3 F.jpg",
    "/IMAGENES/3X3 M.jpg",
    "/IMAGENES/5vs5 .jpg",
    "/IMAGENES/PIZZARZABASKET.jpg",
    ],
    description: "Diseños de flyers promocionales para torneos de baloncesto",
  },
  {
    id: 8,
    title: "Thumbnails",
    category: "graphics",
    image: ["/IMAGENES/El texto del párrafo.png"],
    images: [
    "/IMAGENES/El texto del párrafo.png"
    ],
    description: "Diseño de miniatura para videos de YouTube",
  },
  {
    id: 9,
    title: "Beto Honey",
    category: "UX/UI",
    image: [],
    images: [],
    description: "Diseño realizado en Figma para la aplicación móvil de Beto Honey, Ejercicio académico enfocado en la experiencia de usuario y la interfaz de usuario.",
  },
   {
    id: 10,
    title: "TestIA",
    category: "UX/UI",
    image: [],
    images: [],
    description: "TestIA es una plataforma web diseñada para evaluar candidatos a puestos relacionados con desarrollo, y lenguajes de programación.",
  }
];
