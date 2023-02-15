import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <main>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contacts/>
      <Footer/>
    </main>
  )
}

export default App