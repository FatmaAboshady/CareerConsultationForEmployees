import { Component } from "react";
import image from '../../images/Forest.png';
class ContactInformation extends Component {
    render(){
       return(
           <>
             <div className=" row p-0 m-0">
                 
                 <div className="col-md-6 d-flex align-items-center">
                 <div>
                 <h2 className="py-2 about-text">Contact</h2>
                 <p className="aboutpragragh text-secondary"> If you have a question about our career assessments, use can use the the form below. We do try to answer all queries within 48 hours !!</p>

                    <form>
                        <input type="text" placeholder="Your name"className="form-control form-group"/>
                        <input type="text" placeholder="Your Email" className="form-control form-group"/>
                        <input type="text" placeholder="Subject" className="form-control form-group"/>
                        <textarea name="" id="" rows="7" className="form-control form-group" placeholder="Your Message"></textarea>
                        <button className="btn px-5 py-2 mb-3 btn-success text-bolder" type="submit">Submit</button>
                    </form>
                 </div>
             </div>

             <div className="col-md-6 d-flex justify-content-center ">
                         <img src={image} alt="" className="w-75"/>
                 </div>
                 </div>
             
           </>
       )
    }
}
export default ContactInformation;