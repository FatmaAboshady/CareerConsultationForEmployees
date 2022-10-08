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
    console.log("job id"+this.job_id.targetJob);
   
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

                <h3 className="  text-muted text-center my-4">Your Personal <span className="text-success">Consultation</span></h3>
              
                  {/* loop on jobs */}
                  
                {this.state.plan.map((valuejobs,indexjobs)=>{ 
                  return(
                    <>
                                    <div className="timeline mt-5 mb-5 position-relative ">

                    <div className="containerr left  " key={indexjobs} >
                       <div className="content  w-100">      
                       <h2 className="text-center text-capitalize text-success my-4" >{valuejobs.jobLevel}</h2>
                       <div className="bg-light p-4 rounded  mb-4">
                          <div class="row">
                               <div class="col-md-3">
                                      <h2 className=" "> Soft  Skills :</h2>
                                </div>
                                <div class="col-md-9">


                                
                       {valuejobs.softSkills.map((softskillsvalue,softskillsindex)=>{ 
                        if(softskillsvalue.accept=='true'){
                          return(
                            <>
                           <div className=" content  mb-4">
                             <div key={softskillsindex}>
                              <div class="row">
                                 <h4 class="col-md-5">
                                    <span className="text-muted "> {softskillsindex+1}-{softskillsvalue.soft_name}</span>
                                 </h4>
                                 <div className=" col-md-7 ">
                                    <span className="btn btn-outline-success ml-5 p-2  p-1 mb-2">you are good enough in this skill</span>
                                  </div>
                               </div>
                              </div>
                            </div>
                            </>
                             )
                        } else if(softskillsvalue.accept=='false'){
                          return(
                            <>
                           <div className="  content  mb-4">
                             <div key={softskillsindex}>
                              <div class="row">
                                 <h4 class="col-md-5">
                                    <span className="text-muted mr-5"> {softskillsindex+1}-{softskillsvalue.soft_name}</span>
                                 </h4>
                                 <div className=" col-md-7 ">
                                    <span className="btn btn-outline-danger ml-5 p-2  p-1 mb-2">you are not good enough in this skill</span>
                                  </div>
                              </div>

                              <div class="row mt-3">
                                 <h5 class="col-md-5 ">
                                    <span className="text-muted  "> recomended courses :</span>
                                 </h5>

                                {softskillsvalue.courses.map((coursesvalue,coursesindex)=>{ 

                                  return(
                                    <>


                                 <div className=" col-md-7 content ">
                                   <div> {coursesindex+1 }-{coursesvalue.courseTytle} course</div>
                                     <button type="button" className="btn btn-success mt-3 " data-toggle="modal" data-target="#exampleModalCenter">
                                       view more details</button>
                                       <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                       <h5 className="modal-title text-center text-success" id="exampleModalLongTitle">{coursesindex+1}- {coursesvalue.courseTytle} course</h5>
                                                       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                          <span aria-hidden="true">&times;</span>
                                                       </button>
                                                    </div>
      
                                                   
                                                      <div className="modal-footer">
                                                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                          <button type="button" className="btn text-white btn-success" ><a className=" text-white text-decoration-none" href={coursesvalue.link} target="_blank"> view course</a> </button>

                                                      </div>
                                                 </div>
                                                </div>
                                             </div>
                                  </div>
                                  </>

                                  )

                                 })}
                                  
                              </div>
                              </div>
                            </div>
                            </>
                             )
                        } else{
                          return(
                            <>
                           <div className=" content  mb-4">
                             <div key={softskillsindex}>
                              <div class="row">
                                 <h4 class="col-md-12">
                                    <span className="text-muted mr-5"> {softskillsindex+1}-{softskillsvalue.soft_name}</span>
                                 </h4>
                                 
                               </div>
                              </div>
                            </div>
                            </>
                             )
                        }
                               })}

                                </div>
                          </div>
                       </div>

                       {/* technical sills ------------------------------------------------------------ */}

                       <div className="bg-light p-4 rounded  mb-4">
                          <div class="row">
                               <div class="col-md-3">
                                      <h2 className=" "> technical Skills :</h2>
                                </div>
                                <div class="col-md-9">

                                   {valuejobs.technicalSkills.map((technicalSkillsvalue,technicalSkillsindex)=>{ 
                                    if(technicalSkillsvalue.accept=='skill and level accepted' ){
                                      return(
                                        <>
                                       <div className=" content  mb-4">
                                         <div key={technicalSkillsindex}>
                                          <div class="row">
                                              {/* skill name-------- */}
                                             <h4 class="col-md-7">
                                                <span className="text-muted "> {technicalSkillsindex+1}-{technicalSkillsvalue.technical_name}</span>
                                             </h4>
                                            {/* skill name-------- */}
                                            <div className=" col-md-5 ">
                                                <span className="btn btn-outline-success  p-2  p-1 mb-2">you are good enough in this skill</span>
                                              </div>
                                           </div>
                                          </div>
                                        </div>
                                        </>
                                         )
                                    } else if(technicalSkillsvalue.accept=='skill and level not accapted '|technicalSkillsvalue.accept== "skill and level not accapted"){
                                      return(
                                        <>
                                       <div className="  content  mb-4">
                                         <div key={technicalSkillsindex}>
                                          <div class="row">

                                            {/* skill name-------- */}
                                             <h4 class="col-md-7">
                                                <span className="text-muted "> {technicalSkillsindex+1}-{technicalSkillsvalue.technical_name}</span>
                                             </h4>
                                            {/* skill name-------- */}

                                             <div className=" col-md-5 ">
                                                <span className="btn btn-outline-danger  p-2  p-1 mb-2">you are not good enough in this skill</span>
                                              </div>
                                            </div>

                                          {/* skill tool-------------------- */}
            
                                          <div class="row mt-3">
                                             <h5 class="col-md-3 ">
                                                <span className="text-muted  "> skill tools  :</span>
                                             </h5>
                                             <div className=" col-md-9  ">


                                              <div  className="text-muted"> You should take one of these tools </div>
                                              <br />
                                              <div className="content">

                                              


                                                      {technicalSkillsvalue.skill_tools.map((skilltoolsvalue,skilltoolsindex)=>{ 

                                                        return(
                                                        <>
                                                       <div> {skilltoolsindex+1 }-{skilltoolsvalue} </div>
                                                        <br />
                                                        </>
                                                      )

                                                        })}

                                               </div>
                                               </div>


            
                                           
                                              
                                          </div>

                                            {/* skill tool-------------------- */}


                                            {/* tech couses-------------------------- */}

                                            <div class="row mt-3">
                                 <div class="col-md-3  mt-5">
                                    <h4 className="text-muted mt-5 "> recomended courses :</h4>
                                 </div>
                                 <div className="col-md-9 mt-5 ">

                                {technicalSkillsvalue.courses.map((techcoursesvalue,techcoursesindex)=>{ 
                                  if(techcoursesvalue != null){

                                      return(
                                    <>
                                  <div className="  content mt-4">
                                   <div> {techcoursesindex+1 }-{techcoursesvalue.courseTytle} </div>
                                   <button type="button" className="btn text-white btn-success mt-4" ><a className=" text-white text-decoration-none" href={techcoursesvalue.link} target="_blank"> view course</a> </button>

                                  

                                       
                                     
                                  
                                  </div>

                                  </>
                                  )
                                  }

                                

                                 })}
                                  
                                            </div>
                                            </div>
                                             {/* tech couses-------------------------- */}


            
            
            
            
                                          </div>
                                        </div>
                                        </>
                                         )
                                    }else{
                                      return(
                                        <>
                                       <div className=" content  mb-4">
                                         <div key={technicalSkillsindex}>
                                          <div class="row">
                                             <h4 class="col-md-12">
                                                <span className="text-muted mr-5"> {technicalSkillsindex+1}-{technicalSkillsvalue.technical_name}</span>
                                             </h4>
                                             
                                           </div>
                                          </div>
                                        </div>
                                        </>
                                         )
                                    }


                                   })} 



                                </div>

                          </div>

                        </div>




                       {/* technical sills ------------------------------------------------------------ */}

                      




                      

                     
                                                
   
   
                       </div>
                     </div> 
                     </div>
                    
                    </>
                  )

                 
                                               
                                               
                                               
                                               
                                               })}


                                  <div className=" d-flex justify-content-center mb-4">

                                  
                                  <button className="btn btn-danger" onClick={localStorage.removeItem("jobid")}> 
                                  <Link to = {"/home"}  className="text-white aboutpragragh text-bold cursor-pointer text-decoration-none"  >Choose Another Target Job</Link>

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
export default Training;