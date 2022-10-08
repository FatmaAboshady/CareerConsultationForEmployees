import { Component } from "react";
import img1 from '../../images/Recommendation.png';
import './ServicesBackgroung.css';
import './CareerTemplate.css';
import axios from "axios";

import {Link} from 'react-router-dom';
import Footer from "../Footer/Footer";
import CareerTemplate from "./CareerTemplate";

class Training extends Component {
    userId = localStorage.getItem("userId");
    job_id={
     targetJob: "62d08701fdecb1bbfe1f2284"
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
   
    let {data} = await axios.post(`https://gradiuation.herokuapp.com/api/consultant/${this.userId}`, this.job_id);
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
                    <h4 className="text-white ">
                    “There Is No Passion To Be Found In Playing 
Small - In Settling For A Life That Is Less 
Than You Are Capable Of Living”
                    </h4>
                <h4 className="text-white ">NELSON MANDELA</h4>
               </div>
           </div>

              {/* <div className="row p-0 m-0"> */}
              {/* <div className=" col-md-6 overflow-hidden">
              <img src={img1} alt="" className="w-75 " />
              </div> */}
             
              {/* <div className="col-md-6 d-flex align-items-center "> */}
                <h3 className="  text-muted text-center my-4">Your Personal <span className="text-success">Consultation</span></h3>
              {/* </div> */}
                {/* </div> */}

                <div className="timeline mt-5 mb-5 position-relative ">
                  
                {this.state.plan.map((value,index)=>{ 
                  return(
                    <>
                    <div className="containerr left  " key={index} >
                       <div className="content w-100">
 
                                                                      
                       <h4 className="text-center text-capitalize text-success mb-4" >{value.jobLevel}</h4>

                       <div className="bg-light p-4 rounded  mb-4">
                        <div className=" d-flex flex-row">
                        col-sm-3
                        <div d-flex flex-column>


                           {value.softSkills.map((value1,index1)=>{ 

                             if(value1.accept = 'you dont have soft skill yet so this skill is not accapted'){

                                 return(   
                                       <div className="content w-100 mb-4">
                                       <span className="font-weight-bold mr-4">{index1+1}-</span>

                                       <span className="text-muted mr-5"> {value1.soft_name}</span>

                                       
                                        
                                        <span className="bg-danger ml-5 p-2 text-white p-1 mb-2">you are not good enough in this skill</span>

                                       
                                         <br />
                                         <br />


                                      
                                       <span className="font-weight-bold mr-4">{index1+1}recommended courses :</span><br />
           <div>{value1.soft_name} course</div>
           <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
view more details</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-center text-success" id="exampleModalLongTitle">{index1+1}- {value1.soft_name} course</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      
      <hr />
      <div className="modal-body">
      <span className="font-weight-bold mr-4">  Before start  this course you shoud open mind, a spirit of self-inspection, and willingness to improve yourself </span>

      </div>
      <div className="modal-body">
      <span className="font-weight-bold mr-4">  After end this course you expexted to learn {value1.soft_name}  </span>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn text-white btn-success" ><a className=" text-white text-decoration-none" href="https://www.udemy.com/course/improve-your-reading-speed-and-comprehension/" target="_blank"> view course</a> </button>

      </div>
    </div>
  </div>
</div>
           </div>
        )
       }
       else{
        return
        <>
        <h3> congratulation your soft skills is appropriate for this ob</h3>
        </>
       }

    })}
           </div>

                        </div>
                       
                            
                         
                             



                       </div>


                       <div className="bg-light p-4 rounded ">
                        <div className=" d-flex flex-row">
                        <h4 className="mr-4 "> 
                        technical <br /> skills :
                        </h4>
                        <div d-flex flex-column>


                          {value.technicalSkills.map((value1,index1)=>{ 

   if(value1.accept = 'skill and level not accapted'){

       return(   
           <>
           <div key={index1}>
           <div className="content mb-4">
            <span className="font-weight-bold mr-4">{index1+1}</span>
           <span className="text-muted mr-5 " >{value1.technical_name}</span>


          
           {/* <span className="font-weight-bold mr-4"> your level :</span>
           <span className="text-success bold">{value1.skillLevel} </span> */}
           
           {/* <div className="bg-danger text-white p-1 my-2">{value1.accept}</div> */}
           {index1==0?<span className="bg-danger ml-5 p-2 text-white p-1 mb-2">you are not good enough in this skill</span>:<span></span>}

        
<br />
<br />
<br />


         


<div>     
            {
                (() => {
                    if(value1.skill_tools) {
                        return(

<>
<div className="d-flex">
<span className="font-weight-bold mr-4">skill tools:</span>
<div> you shoud learn one of these tools</div>
<br />


<div >

                       { value1.skill_tools.map((value5,index1)=>{ 
                        
                            return (
                                <>
                                <br />
                                <div className="content">
                                <span className="mr-2 text-success">{index1+1}</span>
                                <span>{value5}</span>
                                </div>
<div> 
    {/* ch      */}
            {
                (() => {
                    if(value1.courses) {
                        return(

<>
<div className="d-flex">


   <div> 

                       { value1.courses.map((value2,index2)=>{ 
                        if(value2){

                            return (
                                <>  
                                  <div>

                                  </div>
                                </>
                                
                                   )
                            }
                        })}
    </div>
</div>

</>

                        )
                        } 
                })()  
            }  
 </div>
                                <br />
                                </>
                                
                            )
                        })}

</div>
</div>

</>

                        )
                        } 
                })()  
            }  
</div> 


        


       




        



                               

           </div>
           

        

    



           </div>


          


           {/* {value1.courses.map((value2,index2)=>{ 
// if(value2 !='null'){
//     <div> hello</div>
// }
            
        })} */}

           

           
           </>
        )
        
       }
       else{
        return
        <>
        <h3> congratulation your soft skills is appropriate for this ob</h3>
        </>
       }

                                  })}


                                  
           </div>

                        </div>
                       
                            
                         
                             



                       </div>
                                                       
   
   
                                       </div>
                                       </div> 
                    </>
                  )

                 
                                                })}
  

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
export default Training;