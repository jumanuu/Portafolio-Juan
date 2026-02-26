# Portafolio-Juan - Guía para Agentes

## Comandos de Build y Desarrollo

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo (Vite) |
| `npm run build` | Build de producción (genera /dist) |
| `npm run lint` | Ejecuta ESLint en todo el proyecto |
| `npm run lint -- --fix` | Ejecuta ESLint con autofix |
| `npm run preview` | Preview del build localmente |
| `npm run predeploy && npm run deploy` | Despliega a GitHub Pages (branch gh-pages) |

**Nota:** No hay framework de tests configurado actualmente.

## Convenciones de Código

### Archivos y Nombres
- **Componentes React**: `PascalCase` (`Header.jsx`, `ProjectCard.jsx`)
- **Utilidades/hooks**: `camelCase` con prefijo `use` 
- **Archivos de datos**: `camelCase` (`projectsData.js`, `socials.jsx`)
- **CSS**: `camelCase` (`global.css`, `components.css`)
- **Contextos**: `PascalCase` con sufijo `Context` (`LanguageContext.jsx`)

### Orden de Imports
```javascript
// 1. React core → 2. Bibliotecas de terceros (alfabético) → 
// 3. Componentes/pages locales → 4. Contextos locales → 
// 5. Datos/traducciones → 6. Estilos
```

### Patrones de Componentes
```jsx
const Header = () => {
  const { language } = useLanguage();
  return (
    <motion.header ...>
      {/* contenido */}
    </motion.header>
  );
};
export default Header;

export { db };  // Named exports para utilidades
export default Home;  // Default export para pages
```

### Manejo de Errores
```jsx
// ✅ try-catch-finally para operaciones async
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    await someAsyncOperation();
    setSuccess(true);
  } catch (error) {
    console.error("Error:", error);
    alert(t.errorMessage);
  } finally {
    setLoading(false);
  }
};

// ✅ Validación previa
if (!rating) { alert("Selecciona una calificación"); return; }
```

### Rendering Condicional
```jsx
// ✅ Usar AnimatePresence para transiciones
<AnimatePresence mode="wait">
  {submitted ? (
    <motion.div key="success" ...>...</motion.div>
  ) : (
    <motion.form key="form" ...>...</motion.form>
  )}
</AnimatePresence>
```

## Reglas ESLint Activas
- `no-unused-vars`: Error, excepto variables con patrón `^[A-Z_]`
- `react-hooks/set-state-in-effect`: Off
- Extiende: `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- Ignora: `dist/`, `src/dataconnect-generated/`

## Estructura del Proyecto
```
src/
├── components/     # Componentes reutilizables
├── context/         # React Context (LanguageContext, etc.)
├── data/            # Datos estáticos y traducciones
├── pages/           # Componentes de página (Home.jsx)
├── styles/          # CSS por componente
├── coments/         # Firebase config (nombre histórico - typo)
├── dataconnect-generated/  # Firebase generated code
├── App.jsx          # Entry component
└── main.jsx         # ReactDOM render
public/
├── IMAGENES/        # Imágenes del portfolio
├── VIDEOS/          # Videos del portfolio
└── projects/        # Imágenes de proyectos específicos
```

## Imágenes y Media

### Paths de imágenes
- Usar variable `BASE_PATH` para rutas de media:
```javascript
const BASE_PATH = import.meta.env.DEV ? "" : "/Portafolio-Juan";
image: `${BASE_PATH}/IMAGENES/foto.jpg`
```
- **Nunca** usar arrays para `image` - usar string
- Usar `images: []` (array) para galerías múltiples

## Firebase y Datos
- Credenciales en `src/coments/firebase.js` - **no exponer en repos públicos**
- Usar named export: `export { db }`
- Usar `serverTimestamp()` para fechas en Firestore

## Tailwind CSS
El proyecto usa **Tailwind CSS v4** con el plugin Vite:
```jsx
// ✅ Estilos con Tailwind
<div className="flex items-center justify-between">

// ✅ Combinar con CSS custom
<motion.div className="header-band" whileHover={{ scale: 1.05 }}>
```

## Deployment
- **GitHub Pages**: Deploy automatico a `https://jumanuu.github.io/Portafolio-Juan/`
- Base path en `vite.config.js`: `/Portafolio-Juan/`
- Variable `VITE_BASE_PATH` para overrides de entorno

## Reglas Importantes

1. **React 19** - usar features modernos de React
2. **Vite** - no usar Create React App
3. **JavaScript puro** - sin TypeScript
4. **Framer Motion** - animaciones de UI (motion.header, motion.div, etc.)
5. **Tailwind CSS** - para estilos utilitarios
6. **No hacer commit** de archivos en `/dist` o credenciales
