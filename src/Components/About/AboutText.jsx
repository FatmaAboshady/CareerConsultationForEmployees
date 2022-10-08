import { Component } from "react";
import image from '../../images/About.png';
import '../HomeHeader/Header.css';

class AboutText extends Component {
    render(){
       return(
           <>
             <div className=" row p-0 m-0">
                 <div className="col-md-6 ">
                         <img src={image} alt="" className="w-75"/>
                 </div>
             <div className="col-md-6  d-flex align-items-center">
                 <div>
                 <h2 className="pb-2 about-text">Our Genesis</h2>

                 <p className="aboutpragragh text-muted">The choice of a career is among the most important decisions of our life….or so it should be. For most however, this choice is still made based on their instincts, and the word of others. And that’s where we come in! We help the career decision maker reach the right decision and make an informed choice. </p>
                 <p className="aboutpragragh text-secondary">We are a not-for-profit service therefore part of our mission is to provide services to as many as possible of those who need it.</p>

                 </div>
             </div>
             </div>
           </>
       )
    }
}
export default AboutText;