import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import FeedbackForm from "../components/FeedbackForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      
      <main className="app">
        <About />
        <Experience />
        <Projects />
        <FeedbackForm /> 
      </main>
      
      <Footer />
    </>
  );
};

export default Home;