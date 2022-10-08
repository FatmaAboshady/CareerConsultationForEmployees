import { Component } from "react";
import Footer from "../Footer/Footer";
import AboutHeader from "./AboutHeader";
import AboutText from "./AboutText";

class About extends Component {
    render(){
       return(
           <>
             <AboutHeader/>
             <AboutText/>
             <Footer/>
           </>
       )
    }
}
export default About;