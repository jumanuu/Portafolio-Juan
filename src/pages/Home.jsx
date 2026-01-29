import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <main className="app">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default Home;