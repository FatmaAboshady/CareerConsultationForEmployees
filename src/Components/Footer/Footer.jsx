import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook} from "@fortawesome/free-brands-svg-icons";
import { faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faYoutube} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';
class Footer extends Component {
    render(){
       return(
           <>
           <footer className="py-5 bg-dark">
           <div className="d-flex justify-content-center align-item-center">
                <div className="parent rounded-circle bg-info overflow-hidden d-flex justify-content-center align-items-center mr-2">
                <FontAwesomeIcon className="text-light iconSize" icon={faFacebook} />
                </div>
                
                <div className="bg-light overflow-hidden d-flex justify-content-center align-items-center  rounded-circle parent mr-2">
                <FontAwesomeIcon className="text-dark iconSize" icon={ faInstagram} />
                </div>
                <div className="iconbibyBlue overflow-hidden d-flex justify-content-center align-items-center  rounded-circle parent mr-2">
                <FontAwesomeIcon className="text-light iconSize"  icon={ faTwitter} />
                </div>
                <div className="iconRed parent overflow-hidden d-flex justify-content-center align-items-center rounded-circle">
                <FontAwesomeIcon className="text-light iconSize " icon={ faYoutube} />
                </div>
           </div>
           </footer>
           </>
       )
    }
}
export default Footer;

