import { Component } from "react";
import img1 from '../../images/Forms.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select'; 

class Experiance extends Component {
 
  constructor(props) {
    super(props);
    this.state = { value:'' ,     // for yes or no in question of job
    chosenCourses: [],            // courses which user select
    course:[],                    // courses which appear in design from api
    jobs:[],                      // job name which appear in design from api
    companies :[],                // to save companies if the user work in many companies
    projects :[],                 // to save projects of user
    projectSkill:[],
    project_skill:[],             //contains all skill tools
    skillName:[],                 // which has all skill name with dublicated
    skill_name :[],               //this for display technical name in select
    skillsWhichAppear :[],        //containes skill tools which display to the user
    userJobs:[],
    user : {
      companyName :"",
      jobName: "62d07feffdecb1bbfe1f224d",
      joinDate: "" ,
      leaveDate :"",
      projects : []
    },
    project : {
      projectTitle : '',
      projectDescription : '',
      PeriodOfProject : '',
      userPeriodOfProject : '',
      projectSkill:[]
    }
    ,
    skill :{
      desc:'',
      tool:''
    }
   }; 
  //  this.handleChange = this.handleChange.bind(this);
   this.getData=this.getData.bind(this);
   this.getProject=this.getProject.bind(this);
   this.getSkill=this.getSkill.bind(this);
   this.sendData=this.sendData.bind(this);
   this.add_skill=this.add_skill.bind(this);
   this.handleChange=this.handleChange.bind(this);
  }

  id = localStorage.getItem("userId");  // to get user id from local storage


 
  getData = (e) =>{
    this.state.user[e.target.name] =e.target.value;
    console.log(this.state.user);
  }
  getProject =(e)=>{
    this.state.project[e.target.name]=e.target.value;
    console.log(this.state.project);
  }

  getSkill =(e) =>{
    this.state.skill[e.target.name] =e.target.value;
    console.log(this.state.skill);
  }
  // من اجل معرفة اختيار المستخدم هل سبق له العمل ام لا
  onChange =e=> {
    this.setState({value : e.target.value});
 }


 handleChange = (selectedOption) => {

  this.setState({ selectedOption }, () =>
    console.log(`Option selected:`, this.state.selectedOption)
  );
  let [result] = selectedOption.map(({ value }) => value);
  this.state.chosenCourses.push(result)
  console.log(result)
 
};
     z =[];
      getApiForSkills = async() => {
          let {data} = await axios.get("https://gradiuation.herokuapp.com/technicalSkill" );
          
            this.setState({
              project_skill:data,
              
            });
            
            let size =this.state.project_skill.length;
            console.log(size);
            
            let tools=[];
            
            
            for(let i=0 ; i< size-1; i++){
  
              let x = this.state.project_skill[i].name;
              let y = this.state.project_skill[i+1].name;
              this.state.skillName.push(data[i].name);
              if ( x === y){
                  tools.push(this.state.project_skill[i].tool);
              }
  
              else if (x!== y){
                tools.push(this.state.project_skill[i].tool);
                this.z.push(tools);
                tools=[];
              }
              
            }
  
            
            let data1 = this.z[0];
            console.log(data1);
            this.z.push(tools);
            console.log(tools);
            console.log(this.z);
            let removeDSkill = Array.from(new Set(this.state.skillName));
            this.setState({
              skill_name:removeDSkill,
            });
  
      
            console.log(this.state.skillName);
            console.log(removeDSkill);
            console.log(this.state.project_skill.name);
            
         }
  
  
         // function to get index of skill name which selected
         
         valueOfIndex =(val) =>{
          
          return(this.state.skill_name.indexOf(val));
          
         } 
  
  
        //لحفظ جميع المشاريع في مصفوفة
      add_projects =(e) => {
        
        let x= document.getElementById("form2").checkValidity();
        if (!x) {
          alert("fill the felids")
      }
      else {
      this.state.project.projectSkill.push(this.state.skill);
      localStorage.setItem('project' ,JSON.stringify(this.state.project));
      let retrivedProject =JSON.parse(localStorage.getItem('project'));
      this.state.user.projects.push(retrivedProject);
      document.getElementById("form2").reset();
      this.state.project.projectSkill=[];
      }
      }     

        
       //لحفظ جميع الشركات فى مصفوفة 
      
       add_company =(e) => {
        let x= document.getElementById("form1").checkValidity();
        if (!x) {
          alert("fill the felids")
      }
      else {
        
        
        
        console.log(".....");
        
        this.state.project.projectSkill.push(this.state.skill);
        
       
        localStorage.setItem('project' ,JSON.stringify(this.state.project));
        let retrivedProject =JSON.parse(localStorage.getItem('project'));
        this.state.user.projects.push(retrivedProject);
       
        

        
        localStorage.setItem('user' ,JSON.stringify(this.state.user));
        let retrivedUser =JSON.parse(localStorage.getItem('user'));
        this.state.userJobs.push(retrivedUser); 

         
        this.state.user.projects=[];
        this.state.project.projectSkill=[];
        console.log(this.state.userJobs);

        document.getElementById("form1").reset();
        document.getElementById("form2").reset();
      }
      }
      
       //to save more than one skill
       add_skill =(e)=>{

        
        localStorage.setItem('skill' ,JSON.stringify(this.state.skill));
        let retrivedSkill =JSON.parse(localStorage.getItem('skill'));
        this.state.project.projectSkill.push(retrivedSkill);
        
        // this.state.project.projectSkill=[];
       }

         sendData = async(e)=>{
          this.state.project.projectSkill.push(this.state.skill);
          this.state.user.projects.push(this.state.project);
          this.state.userJobs.push(this.state.user); 
          console.log("user")
          console.log(this.state.user);
          
          let userExperienceInfo = {
            courses : this.state.chosenCourses,
            jobs:this.state.userJobs,
        
          }   
          console.log(userExperienceInfo);
          let {data} = await axios.post(`https://gradiuation.herokuapp.com/api/receiveJob/${this.id}` , userExperienceInfo);
          console.log(data);
          window.location.pathname = "login"


          
         }
  
         //function to handle skills
         handleSkillChange = (e) => {
          this.state.skill[e.target.name] =e.target.value;
          console.log(this.state.skill);
          let skillIndex = this.valueOfIndex(this.state.skill.desc);
          console.log(typeof(skillIndex));
          for(let i=0 ; i< this.state.skill_name.length; i++){
  
            if(skillIndex === i){
              this.setState({
                skillsWhichAppear:this.z[i]
              });
              console.log("t");
              console.log(this.z[i]);
            }
          }
  
    
    
        }
        //api الوظائف
         getApiForJob = async() => {
      let {data} = await axios.get("https://sara-app-15.herokuapp.com/jobs" );
      
        this.setState({
          jobs:data.data
        })
        }
     

        getApiForCourses = async() => {
          let {data} = await axios.get("https://gradiuation.herokuapp.com/api/course" );
            this.setState({
              course:data.map(item =>{
                return{value:item._id , label:item.courseTytle}
              })
              
            })
            
         }
        componentDidMount(){
          this.getApiForJob();
          this.getApiForSkills();
          this.getApiForCourses();
        }


    render(){
      const {value}= this.state;
      const { selectedOption } = this.state;
      return(
          <>

           <div className="pt-5 pb-5">
            
           </div>

             
           <div className="border mb-5">
                   <div className="row p-0 m-0">
                       <div className="col-md-4 py-1 border-right text-center">
                           
                       <h4>  
                       <FontAwesomeIcon className="text-success mr-1" icon ={faCheck}/> 
                       <Link to="/personalInfo" className="text-success text-decoration-none">Personal Information</Link>
                       </h4>
                       </div>
                       <div className="col-md-4 py-1 border-right text-center">
                       <h4>
                       <FontAwesomeIcon className="text-success mr-1" icon ={faCheck}/>  
                       <Link to="/education" className="text-success text-decoration-none">Education</Link>
                       </h4>
                       </div>
                       <div className="col-md-4 py-1 border-right text-center">
                       <h4>
                       <Link to="/experiance" className="text-success text-decoration-none">Experiance</Link>
                       </h4>
                       </div>
                       
                   </div>
            </div>

            <div className="row p-0 m-0">
            <div className="col-md-6">
               <div className="container">
                           <img src={img1} className="w-75" alt="" />
                       </div>
               </div>
               <div className="col-md-6  d-flex align-items-center">
                    
                       <div className="container">
                       <h4 htmlFor="">What courses have you taken?</h4>
                       <form action="" id ="form" onSubmit={this.handleSubmit}>
                           

                       <Select
                        isMulti
                        value={selectedOption}
                        onChange={this.handleChange}
                        options=
                        {this.state.course}/>
                         {/* <select name="courses" id="courses" multiple={true} onChange={this.handleChange}  className="form-control border border-success form-group">
                         {
                             this.state.course.map(( value) =>
                                {
                               return(
                                 <option key={value._id} value={value._id}>
                                 {value.courseTytle}
                               
                                 </option>
                               )
                             })
                      }
                             </select> */}
                           
                       <h4 className="my-3">Have you ever worked before ?!</h4>
                      
                       <input type="radio" name="job" id="" value="yes" onChange={this.onChange} /> <label htmlFor="" className="mr-4">YES</label>
                       <input type="radio" name="job" id="" value="no"  onChange={this.onChange}/><label htmlFor="">NO</label>
                       </form>
                       {
                           value==='yes' &&(
                          <div className=" p-2">
                            <form action="" id ="form1" onSubmit={this.handleSubmit}>
                            <label htmlFor="">Company Name :</label>
                             <input type="text" onChange={this.getData}  className="form-control border border-success form-group" placeholder="Company name" required name="companyName"/>
                             <label htmlFor="">Job Name :</label>
                             <select name="jobName" id="" onChange={this.getData}  className="form-control border border-success form-group">
                             <option className="" value="">---- Select your job----</option>
                             {
                             this.state.jobs.map((value , index) =>
                                {
                               return(
                                 <option key={index} value={value._id}>
                               {value.job_title}
                                 </option>
                               )
                             })
                      }
                             </select>
                             
                             <label htmlFor="">Joining Date :</label>
                             <div className="clearfix"></div>
                             <input type="date" required onChange={this.getData} className=" form-control w-25 border-success float-left mr-3" placeholder="From" name="joinDate" ></input>
                             <input type="date" required onChange={this.getData}  className="form-control w-25 border-success float-left"  placeholder="To"  name="leaveDate" ></input>
                             <div className="clearfix"></div>
                             </form>
                             <form action="" id ="form2" onSubmit={this.handleSubmit}>
                                 <h4 className="pt-4">Your projects !</h4>
                                 <label htmlFor="" className="mt-3 ">Project Title :</label>
                                 <input type="text" required className="form-control mt-1 form-group" onChange={this.getProject} placeholder="Project title "name="projectTitle"/>
                                 <label htmlFor="" className="mt-3 ">Project Description :</label>
                                 <textarea required  name="projectDescription" onChange={this.getProject} className="form-control mt-1 form-group" placeholder="write your project description here...."></textarea>
                                 <label htmlFor=""className="mt-3 ">Period of Project :</label>
                                 <input type="text" required  name ="PeriodOfProject"  onChange={this.getProject} className="form-control mt-1 form-group" placeholder="Period of project (in months)"/>
                                 <label htmlFor="" className="mt-3 ">Your Period of Project :</label>
                                 <input type="text" required  name ="userPeriodOfProject"  onChange={this.getProject} className="form-control mt-1 form-group" placeholder="Your period in the project (in months)"/>
                                 
                                 <p className="font-weight-bold my-5">Skills which used in this project</p>
                                 
                                  <select name="desc" onChange={this.handleSkillChange}    className=" w-50  form-control border border-success form-group">
                                <option className="skill">---- Select ----</option>
                                {
                             this.state.skill_name.map(( value , index) =>
                                {
                               return(
                                 <option key={index}  id="nameOfSkill">
                                 
                                 {value}
                               
                                 </option>
                               )
                             })
                                }
                               </select>

                             

                             <select name="tool"  onChange={this.handleSkillChange} className=" mb-4 tool w-50  form-control border border-success form-group">
                             <option className="skill">---- Select ----</option>
                         {
                             this.state.skillsWhichAppear.map(( value , index) =>
                                {
                               return(
                                 <option key={index}>
                                  
                                 {value}
                                 
                                 </option>
                               )
                             })
                      }
                             </select>
                                 </form>
                                 <h5 className="my-3">
                                     Click button to add another skill ?!
                                     <button type="button" onClick={this.add_skill} className="border-none bg-transparent ml-2" ><FontAwesomeIcon className="text-success" icon ={faPlusSquare}/></button>
                                  </h5>
                                  <h5 className="my-3">
                                     Click button if you want to add another project ?!
                                     <button type="button" onClick={this.add_projects} className="border-none bg-transparent ml-2" ><FontAwesomeIcon className="text-success" icon ={faPlusSquare}/></button>
                                  </h5>

                                  <div className="border my-4 w-50 m-auto "></div>
                                  <h5 className="my-3">
                                     Click to add another companies 
                                     <button type="button" onClick={this.add_company} className="border-none bg-transparent ml-2" ><FontAwesomeIcon className="text-success" icon ={faPlusSquare}/></button>
                                  </h5>
                           
                          </div> )
                       }
                        
                       </div>
               </div>
               
               
               
            </div>

            <div className="container-fluid mt-4 mb-1">
            <div className="text-right">
              
               <button className="btn bg-success px-5 text-white aboutpragragh text-bold cursor-pointer" onClick={this.sendData}>
                  save
                   {/* <Link to="/profile" className="text-white aboutpragragh text-bold cursor-pointer text-decoration-none" >Submit</Link> */}
               </button>
               
            </div>
            </div>
            
          </>
      )
    }
}
export default Experiance;