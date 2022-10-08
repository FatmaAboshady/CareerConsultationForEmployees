import { Component } from "react";
import '../HomeHeader/Header.css';
class AboutHeader extends Component {
    render(){
       return(
           <>
           <div className="bg d-flex justify-content-center align-items-center">
            <div>
                
                <h2 className="text-white border-bottom about-text">ABOUT US</h2>
            </div>
           </div>
           </>
       )
    }
}
export default AboutHeader;