# Portafolio-Juan - Guía para Agentes

## Comandos de Build y Desarrollo

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo (Vite) |
| `npm run build` | Build de producción (genera /dist) |
| `npm run lint` | Ejecuta ESLint en todo el proyecto |
| `npm run preview` | Preview del build localmente |
| `npm run predeploy && npm run deploy` | Despliega a GitHub Pages (branch gh-pages) |

**Nota:** No hay framework de tests configurado actualmente.

## Convenciones de Código

### Archivos y Nombres
- **Componentes React**: `PascalCase` (`Header.jsx`, `ProjectCard.jsx`)
- **Utilidades/hooks**: `camelCase` con prefijo `use` 
- **Archivos de datos**: `camelCase` (`projectsData.js`, `socials.jsx`)
- **CSS**: `camelCase` (`global.css`, `components.css`)

### Orden de Imports
```javascript
// 1. React core
import React from "react";
import ReactDOM from "react-dom/client";

// 2. Bibliotecas de terceros (alfabético)
import { motion } from "framer-motion";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

// 3. Componentes/pages locales
import Home from "./pages/Home";
import Header from "./components/Header";

// 4. Estilos
import "./styles/global.css";
import "./styles/components.css";
```

### Patrones de Componentes
```jsx
// ✅ Componente como función con mayúscula
const Header = () => {
  return (
    <motion.header ...>
      {/* contenido */}
    </motion.header>
  );
};
export default Header;

// ✅ Named exports para utilidades
export { db };

// ✅ Default export para pages
export default Home;
```

### Reglas ESLint Activas
- `no-unused-vars`: Error, excepto variables con patrón `^[A-Z_]`
- Extiende: `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- Ignora: `dist/` folder

## Estructura del Proyecto
```
src/
├── components/     # Componentes reutilizables (Header, ProjectCard, GridProjects, etc.)
├── pages/          # Componentes de página (Home.jsx)
├── styles/         # CSS global y de componentes
├── coments/        # Firebase config (nombre histórico - typo)
├── assets/         # Assets estáticos (SVG, etc.)
├── dataconnect-generated/  # Firebase generated code
├── App.jsx         # Entry component
└── main.jsx        # ReactDOM render
public/
├── IMAGENES/       # Imágenes del portfolio
├── VIDEOS/         # Videos del portfolio
└── projects/       # Imágenes de proyectos específicos
```

## Imágenes y Media

### Paths de imágenes
- Usar variable `BASE_PATH` para rutas de media:
```javascript
const BASE_PATH = import.meta.env.DEV ? "" : "/Portafolio-Juan";
image: `${BASE_PATH}/IMAGENES/foto.jpg`
```
- Las imágenes deben existir en `public/IMAGENES/` o `public/projects/`
- Videos en `public/VIDEOS/`
- **Nunca** usar arrays para `image` - usar string
- Usar `images: []` (array) para galerías múltiples

### Correcto:
```javascript
{
  id: 1,
  image: `${BASE_PATH}/IMAGENES/PORTIMG.jpg`,
  images: [`${BASE_PATH}/IMAGENES/img1.png`, `${BASE_PATH}/IMAGENES/img2.png`]
}
```

### Incorrecto:
```javascript
{
  id: 1,
  image: ["/IMAGENES/PORTIMG.jpg"],  // ❌ array en lugar de string
  image: "/IMAGENES/PORTIMG.jpg"      // ❌ falta BASE_PATH en producción
}
```

## Firebase y Datos

### Configuración
- Credenciales en `src/coments/firebase.js` - **no exponer en repos públicos**
- Usar named export: `export { db }`

## Deployment

- **GitHub Pages**: Deploy automatico a `https://jumanuu.github.io/Portafolio-Juan/`
- Base path configurado en `vite.config.js`: `/Portafolio-Juan/`
- Build output en `/dist`

## Reglas Importantes

1. **React 19** - usar features modernos de React
2. **Vite** - no usar Create React App
3. **JavaScript puro** - sin TypeScript
4. **Framer Motion** - animaciones de UI (motion.header, motion.div, etc.)
5. **No hacer commit** de archivos en `/dist` o credenciales
