import { Component } from "react";
import './HowItWork.css'
import img2 from '../../images/images.jpg';
import img3 from '../../images/list.jpg';
import img4 from '../../images/search.jpg';
class HowItWork extends Component {
    render(){
       return(
           <>
           <div className="py-5">
                <div className="d-flex justify-content-center mb-4">
                    <div>
                    <h2>How Website Work ?!</h2>
                    <p className="text-muted">here we list steps for best usage of our website</p>
                    </div>
                </div>
                <div className=" p-0 m-0 overflow-hidden">
                <div className="row">
                    <div className=" col-md-4 d-flex ">
                         <div className="text-center">
                             <div className="d-flex justify-content-center">
                             <div className="cartona rounded-circle  overflow-hidden d-flex justify-content-center align-items-center">
                                <img src={img2} width="60%" height="50%"/>
                            </div>
                             </div>
                            <h4>Register An Account</h4>
                            <p className="text-muted">apply the registration form carefully to make us know your skills</p>
                         </div>
                    </div>
                    
                    <div className=" col-md-4 d-flex  justify-content-center">
                         <div className="text-center">
                             <div className="d-flex justify-content-center">
                             <div className="cartona rounded-circle  overflow-hidden d-flex justify-content-center align-items-center">
                                <img src={img4} width="60%" height="50%"/>
                            </div>
                             </div>
                            <h4>Specify & Search Your Job</h4>
                            <p className="text-muted">search for the job that you want</p>
                         </div>
                    </div> 
                    <div className=" col-md-4 d-flex  justify-content-center">
                         <div className="text-center">
                             <div className="d-flex justify-content-center">
                             <div className="cartona rounded-circle  overflow-hidden d-flex justify-content-center align-items-center">
                                <img src={img3} width="60%" height="50%"/>
                            </div>
                             </div>
                            <h4>Know Your Plan</h4>
                            <p className="text-muted">know your Appropriate career and training plan</p>
                         </div>
                    </div>


                   
                   
                </div>
                </div>
           </div>
           </>
       )
    }
}
export default HowItWork;