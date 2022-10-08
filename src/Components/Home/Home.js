import { Component } from "react";
import Header from "../HomeHeader/Header.jsx";
import AboutSection from "../AboutSection/AboutSection.jsx";
import HowItWork from "../HowItWorkSection/HowItWork.jsx";
import ContactSection from '../ContactSection/ContactSection.jsx';
import Footer from '../Footer/Footer.jsx';
import './Home.css';
class Home extends Component {
    render(){
       return(
           <>
           <Header/>
           <AboutSection/>
           <HowItWork/>
           <ContactSection/>
           <Footer/>
           </>
       )
    }
}
export default Home;