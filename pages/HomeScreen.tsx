import React from "react"
import Home from "../components/Block/Home";
import About from "../components/Block/Nav/About";

import Contact from "../components/Block/Nav/Contact";
import Gallery from "../components/Block/Nav/Gallery";
import Services from "../components/Block/Nav/Services";
import Button from "../components/Static/Buttton";
// import Button2 from "../components/Block/Button2";
// import { Button } from "react-scroll";

function HomeScreen(): JSX.Element {
       return (
              <div>
                     |<Home />
                     <About />
                     <Services />
                     <Contact />
                     <Gallery />
                     <Button />
                     {/* <Button2/> */}
              </div>
       );
}


export default HomeScreen;