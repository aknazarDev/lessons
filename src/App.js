import './styles/style.scss'

import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Advent from "./components/advent/advent";
import Services from "./components/services/services";
import Cargo from "./components/cargo/cargo";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";


function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <Advent/>
            <Services/>
            <Cargo/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;
