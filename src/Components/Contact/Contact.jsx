import { Component } from "react";
import Footer from "../Footer/Footer";
import ContactInformation from "./ContactInformation";


class Contact extends Component {
    render(){
       return(
           <>
             <ContactInformation/>
             <Footer/>
           </>
       )
    }
}
export default Contact;