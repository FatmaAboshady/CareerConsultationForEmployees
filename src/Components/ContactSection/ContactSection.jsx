import { Component } from "react";
import './ContactSection.css';
class ContactSection extends Component {
    render(){
       return(
           <>
            <div className="border border-top py-4">
                <div className="d-flex justify-content-center mb-4">
                <h2>Contact Us</h2>
                </div>
                <div className="row contactContainer">
                <div className="col-md-6 ">
                        <textarea name="" className="bg-light w-100 border border-none" id="" rows="9" placeholder="Type Your Message"></textarea>
                    </div>

                    <div className="col-md-6  ">
                        <input type="text" className="w-100 py-3 bg-light border border-none mt-1 mb-3" placeholder="Name" />
                        <input type="email"  className="w-100 py-3 bg-light border border-none mb-3" placeholder="Email" />
                        <button type="submit" className="w-100 py-3 bg-success border border-none text-white">Submit</button>
                    </div>
                </div>
            </div>
           </>
       )
    }
}
export default ContactSection;