import About from "./sections/about/About";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Skills from "./sections/skills/Skills";
import Portfolio from "./sections/portfolio/Portfolio";
import Contacts from "./sections/contacts/Contacts";
import Footer from "./sections/footer/Footer";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contacts/>
      <Footer/>
    </main>
  )
}

export default App