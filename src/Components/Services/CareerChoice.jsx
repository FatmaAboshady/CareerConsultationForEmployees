
import { Component } from "react";
import img1 from '../../images/Recommendation.png';
import './ServicesBackgroung.css';
import './CareerTemplate.css';
import axios from "axios";

import {Link} from 'react-router-dom';
import Footer from "../Footer/Footer";
import CareerTemplate from "./CareerTemplate";


class CareerChoice extends Component {
    userId = localStorage.getItem("userId");
    job_id={
      targetJob: localStorage.getItem('jobid')
    }  

constructor(props) {
    super(props);
    this.state = { 
    plan:[]
   }; 
  }

// state= {consultation:{}}


  sendData = async(e ) => {
    console.log("user id"+this.userId);
    // console.log("job id"+this.job_id.targetJob);
   
     let {data} = await axios.post(`https://gradiuation.herokuapp.com/api/careerPath/${this.userId}`, this.job_id);
console.log(data);
    if(data.message=='career path exist'){

      console.log(data.message)
console.log(data.yourCareerPath)
data=data.yourCareerPath


    this.setState({plan:data
    }
    )
    console.log("state" + data)

    console.log("plan"+ this.state.plan);

    }
    
    // data=data.yourCareerPath
    // this.setState({
    //   plan:data,
    // }) 
  }
componentDidMount(){
   this.sendData();
   
 }
    render(){
        let token = localStorage.getItem("token");

if(token){
  

   




       return(
           <>


           <div className="services-bg d-flex align-items-center justify-content-center">
               <div className="w-50">
               {/* <h3 className="text-white mb-5 ">you are qualified enough to this job</h3> */}
                    <h4 className="text-white ">
                    “There Is No Passion To Be Found In Playing 
                       Small - In Settling For A Life That Is Less 
                       Than You Are Capable Of Living”
                    </h4>
                <h4 className="text-white ">NELSON MANDELA</h4>
               </div>
           </div>
            <h2 className="text-muted text-center my-4">Your Personal <span className="text-success">career path</span></h2>
                <div className="timeline mt-5 mb-5 position-relative ">
                  
                {this.state.plan.map((value,index)=>{ 
                  if(index%2==0) 
                     return(   
                          <>         
                             <div className="containerr left ">
                                 <div className="content">
 
                                                                      
                                    <h4 className="text-center text-capitalize">{value}</h4>

                                    


                                       </div>
                                       </div>                 
                                                  </>
                                                    )

                  else 
                  return(
                    <>
                    <div className="containerr left " >
                       <div className="content">
 
                                                                      
                       <h4 className="text-center text-capitalize">{value}</h4>
                                                       
   
   
                                       </div>
                                       </div> 
                    </>
                  )
                                                })}
  

</div>  
<div className=" d-flex justify-content-center mb-4">

                                  
<button className="btn btn-success" > 
<Link to = {"/training"}  className="text-white aboutpragragh text-bold cursor-pointer text-decoration-none"  >view your recommended career consultation</Link>

</button>
</div>




          


                <Footer/>
           </>
       )
    }
    else {
           //  e.preventDefault();
    
       alert("please login first");
       window.location.pathname = "login"
    }
    }
}
export default CareerChoice;