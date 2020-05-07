import React from "react";
import Menu from "./components/menu";
import Nav from "./components/navbar" 
import Header from "./components/header"
import About from "./components/About"
import Contact from "./components/Contact";
import Projects from "./components/ProjectList"
import Footer from "./components/Footer"
  
/***********************
Main Component
***********************/

function App() {
   const [state, setState] = React.useState({
        menuState: false
    });

    const toggleMenu = () => {
        setState(state => ({
        menuState: !state.menuState
            ? 'active'
            : state.menuState === 'deactive'
            ? 'active'
            : 'deactive'
        }));
    };
    
        return (
        <div>
            <Menu toggleMenu={toggleMenu} showMenu={state.menuState} />
            <Nav toggleMenu={toggleMenu} showMenu={state.menuState} />
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
        );   
};

  
export default App;