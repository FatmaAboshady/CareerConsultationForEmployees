import { Component } from "react";
import img1 from '../../images/Forms.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select'; 

class UpdateExperience extends Component {
 
  constructor(props) {
    super(props);
    this.state = { value:'' ,     // for yes or no in question of job
    chosenCourses: [],            // courses which user select
    course:[],                    // courses which appear in design from api
    jobs:[],                      // job name which appear in design from api
    companies :[],                // to save companies if the user work in many companies
    projects :[],                 // to save projects of user
    projectSkill:[],
    retrievedCourses :[],
    index:0,
    showProjectSkill:[],
    ProjectIndex:0,
    userInfo:{
      courses:[],
      jobs:[],
    },
    retrieveJobs :[],
    retrive_Projects :[],
    companyProject:[],
    project_skill:[],             //contains all skill tools
    skillName:[],                 // which has all skill name with dublicated
    skill_name :[],               //this for display technical name in select
    skillsWhichAppear :[],        //containes skill tools which display to the user
    userJobs:[],
    user : {
      
      jobName: "",
      companyName :"",
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
          
          console.log(this.state.userJobs)
          


          // console.log([this.state.selectedOption])
          let userExperienceInfo = {
            courses : this.state.chosenCourses,
            jobs:this.state.userJobs,
        
          }  
          for(let i =0 ; i < userExperienceInfo.courses.length ; i++){
            this.state.userInfo.courses.push(userExperienceInfo.courses[i])
          }
          for(let i =0 ; i < userExperienceInfo.jobs.length ; i++){
            this.state.userInfo.jobs.push(userExperienceInfo.jobs[i])
          }
          console.log("ex")
          console.log(userExperienceInfo) 
          // this.setState({
          //   userInfo :{
          //     courses:this.state.userInfo.courses,
          //     jobs: this.state.userInfo.jobs,
          //   }
          // })
          // console.log("user")
          console.log(this.state.userInfo);
          let {data} = await axios.post(`https://gradiuation.herokuapp.com/api/updateExperience/${this.id}` , this.state.userInfo);
          console.log(data);

          
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
      let {data} = await axios.get("https://sara-app-16.herokuapp.com/jobs" );
      
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

         retrieveData = async()=>{
          let {data} = await axios.get(`https://gradiuation.herokuapp.com/api/getExperience/${this.id}`);
          console.log("data");
          console.log(data); 
          let courseArr =[];
          // let jobs =[];
          
         for (let i =0 ; i < data.courses.length ; i++){
          courseArr.push(data.courses[i]._id);
         }

         for(let i =0 ; i < data.jobs.length ;i++){
          data.jobs[i].joinDate=data.jobs[i].joinDate.slice(0,10);
          data.jobs[i].leaveDate = data.jobs[i].leaveDate.slice(0,10);
         }

          this.state.userInfo={
            courses:courseArr,
            jobs: data.jobs,
          }
          console.log("jjj");
         
          console.log("info");
          console.log(this.state.userInfo.courses)
          // this.setState({
          //   userInfo:this.state.userInfo,
          // })
          this.state.retrievedCourses = data.courses; 
          this.setState({
            retrievedCourses:this.state.retrievedCourses,
          })
          console.log(this.state.retrievedCourses)
          document.getElementById("parent").style.display ='none';
          document.getElementById('childProject').style.display ='none';
          if(data.jobs != []){
            document.getElementById("yes").checked= true;
            this.state.retrieveJobs =data.jobs;
            document.getElementById("d-company").innerHTML = 'Click on Company to Edit';
            for(let i = 0 ; i< (this.state.retrieveJobs.length) ; i++ ){
                this.state.retrive_Projects.push(this.state.retrieveJobs[i].projects);
            }
            console.log("project")
            console.log(this.state.retrive_Projects);
            this.setState({
              retrive_Projects:this.state.retrive_Projects,
            })

          }
         }
        componentDidMount= () =>{
          document.getElementById('NewSkill').style.display='none'
          this.getApiForJob();
          this.getApiForSkills();
          this.getApiForCourses();
          this.retrieveData();
        }


    companyData = (e)=>{
        document.getElementById("parent").style.display ='block';
        const index = this.state.retrieveJobs.findIndex(object => {
            return object.companyName === e.target.value;
          });
         let dataWhichRetrived = this.state.retrieveJobs[index];

         console.log(this.state.retrieveJobs[index])
         this.state.user.projects.push(this.state.retrieveJobs[index].projects)
         document.getElementById('companyName').value = dataWhichRetrived.companyName;
         this.state.user.companyName = dataWhichRetrived.companyName
         let jobId = dataWhichRetrived.jobName;
         document.getElementById('jobName').value = jobId;
         this.state.user.jobName= dataWhichRetrived.jobName;
         console.log(jobId);
         this.state.index =index;
          this.setState({
            index:this.state.index,
          })
         this.state.companyProject = this.state.retrieveJobs[index].projects;
         
         this.state.user.joinDate =dataWhichRetrived.joinDate.slice(0,10);
         this.state.user.leaveDate =dataWhichRetrived.leaveDate.slice(0,10)
         document.getElementById("joinDate").value =dataWhichRetrived.joinDate.slice(0,10);
         document.getElementById("leaveDate").value =dataWhichRetrived.leaveDate.slice(0,10);
         this.setState({
          companyProject:this.state.companyProject,
         })
         document.getElementById('projectDisplay').innerHTML = 'Your Projects';
         
    }    
     projectData =(event)=> {
        let ProjectIndex = this.state.companyProject.findIndex(object => {
            return object.projectTitle === event.target.value;
          });
          this.state.ProjectIndex =ProjectIndex;
          this.setState({
            ProjectIndex: this.state.ProjectIndex,
          })
          let projectWhichRetrived = this.state.companyProject[ProjectIndex];
          console.log(projectWhichRetrived.projectSkill);
          this.state.showProjectSkill =projectWhichRetrived.projectSkill;
          this.setState({
            showProjectSkill:this.state.showProjectSkill,
          })
          this.state.project.projectTitle=projectWhichRetrived.projectTitle;
          this.state.project.projectDescription = projectWhichRetrived.projectDescription;
          this.state.project.UserPeriodOfProject =  projectWhichRetrived.userPeriodOfProject;
          this.state.project.periodOfProject = projectWhichRetrived.PeriodOfProject;

          this.state.user.projects.push(this.state.project);
          
          document.getElementById('childProject').style.display ='block';
          document.getElementById('projectTitle').value = projectWhichRetrived.projectTitle;
          document.getElementById('projectDescription').value = projectWhichRetrived.projectDescription;
          document.getElementById('periodOfProject').value = projectWhichRetrived.PeriodOfProject;
          document.getElementById('UserPeriodOfProject').value = projectWhichRetrived.userPeriodOfProject;
          
          
     }

     newCompany=()=>{
      document.getElementById("parent").style.display ='block';
     }
     newProject=()=>{
      document.getElementById('childProject').style.display ='block';
    }
    newSkill=()=>{
      document.getElementById('NewSkill').style.display='block'
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
                        <Link to="/updateUser" className="text-success text-decoration-none">Personal Information</Link>
                        </h4>
                        </div>
                        <div className="col-md-4 py-1 border-right text-center">
                        <h4>
                          <FontAwesomeIcon className="text-success mr-1" icon ={faCheck}/>
                        <Link to="/updateEducation" className="text-success text-decoration-none">Education</Link>
                        </h4>
                        </div>
                        <div className="col-md-4 py-1 border-right text-center">
                        <h4>
                        <Link to="/updateExperiance" className="text-success text-decoration-none">Experiance</Link>
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
                       <h4 htmlFor="">Your Courses :</h4>
                       <form action="" id ="form" onSubmit={this.handleSubmit}>
                           

                       <ul className="text-success bolder">
                            
                            {
                                 this.state.retrievedCourses.map(( value , index) =>
                                    {
                                   return(
                                     <li key={index} value={value._id}>
                                     {value.courseTytle}
                                   
                                     </li>
                                   )
                                 })
                          }
                        </ul>
                        
                       <Select
                       id="sel"
                        isMulti
                        value={selectedOption}
                        onChange={this.handleChange}
                        options=
                        {this.state.course}/>
                         
                           
                       <h4 className="my-3">Have you ever worked before ?!</h4>
                      
                       <input type="radio" name="job" id="yes" value="yes" onChange={this.onChange} /> <label htmlFor="" className="mr-4">YES</label>
                       <input type="radio" name="job" id="" value="no"  onChange={this.onChange}/><label htmlFor="">NO</label>
                       </form>
                        
                       <h5 id="d-company"> </h5>
                       <ul className="text-success text-bold d-flex list-unstyled">
                            
                            {
                                 this.state.retrieveJobs.map(( value , index) =>
                                    {
                                   return(
                                     <li key={index}  className="text-success bolder mx-1" >
                                     <button className="btn btn-success" value={value.companyName} onClick={this.companyData}>
                                     {value.companyName}
                                     
                                     </button>
                                     </li>
                                   )
                                 })
                          }
                          <li  className="text-success bolder mx-1" >
                                <button className="btn btn-success" onClick={this.newCompany}>
                                    New Company
                                     
                                </button>
                            </li>
                            </ul>
                       
                      <div id="parent" >
                       
                          <div className=" p-2">
                            <form action="" id ="form1" onSubmit={this.handleSubmit}>
                            <label htmlFor="">Company Name :</label>
                             <input type="text" onChange={this.getData}  className="form-control border border-success form-group" placeholder="Company name" required id="companyName" name="companyName"/>
                             <label htmlFor="">Job Name :</label>
                             <select name="jobName" id="jobName" onChange={this.getData}  className="form-control border border-success form-group">
                             <option className="" value='62d07feffdecb1bbfe1f224d'>---- Select your job----</option>
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
                             
                             <label htmlFor="" className="w-25  mr-3">Joining Date :</label>
                             <label htmlFor="" className="w-25">Leaving Date :</label>
                             <div className="clearfix"></div>
                             <input type="date" required onChange={this.getData} className=" form-control w-25 border-success float-left mr-3" placeholder="From" id="joinDate" name="joinDate" ></input>
                            
                             <input type="date" required onChange={this.getData}  className="form-control w-25 border-success float-left"  placeholder="To" id="leaveDate"  name="leaveDate" ></input>
                             <div className="clearfix"></div>
                             </form>


                            <h4 id='projectDisplay' className="mt-5"></h4>
                            
                            

                            <ul className="text-success text-bold d-flex list-unstyled">
                            
                            {
                                 this.state.companyProject.map(( value , index) =>
                                    {
                                   return(
                                     <li key={index}  className="text-success bolder mx-1" >
                                     <button className="btn btn-success" value={value.projectTitle} onClick={this.projectData}>
                                     {value.projectTitle}
                                     
                                     </button>
                                     </li>
                                   )
                                 })
                          }
                            <li  className="text-success bolder mx-1" >
                                <button className="btn btn-success" onClick={this.newProject}>
                                    New Project
                                     
                                </button>
                            </li>
                            </ul>
                             
                             <div id="childProject">
                             <form action="" id ="form2" onSubmit={this.handleSubmit}>
                                 {/* <h4 className="pt-4">Your projects !</h4> */}
                                 <label htmlFor="" className="mt-3 ">Project Title :</label>
                                 <input type="text" required className="form-control mt-1 form-group" onChange={this.getProject} placeholder="Project title " id="projectTitle"name="projectTitle"/>
                                 <label htmlFor="" className="mt-3 ">Project Description :</label>
                                 <textarea required id='projectDescription' name="projectDescription" onChange={this.getProject} className="form-control mt-1 form-group" placeholder="write your project description here...."></textarea>
                                 <label htmlFor=""className="mt-3 ">Period of Project :</label>
                                 <input type="text" required id='PeriodOfProject'  name ="PeriodOfProject"  onChange={this.getProject} className="form-control mt-1 form-group" placeholder="Period of project (in months)"/>
                                 <label htmlFor="" className="mt-3 ">Your Period of Project :</label>
                                 <input type="text" required name='userPeriodOfProject'  id ="UserPeriodOfProject"  onChange={this.getProject} className="form-control mt-1 form-group" placeholder="Your period in the project (in months)"/>
                                 
                                 <p className="font-weight-bold my-5">Skills which used in this project</p>
                                 
                                 <ul className="text-success text-bold d-flex list-unstyled">
                            
                            {
                                 this.state.showProjectSkill.map(( value , index) =>
                                    {
                                   return(
                                     <li key={index}  className="text-success bolder mx-1" >
                                     <button className="btn btn-success"  onClick={this.projectData}>
                                     {value.desc}
                                     : ({value.tool})
                                     </button>
                                     </li>
                                   )
                                 })
                          }
                            <li  className="text-success bolder mx-1" >
                                <button className="btn btn-success" onClick={this.newSkill}>
                                    New Skill
                                     
                                </button>
                            </li>
                            </ul>
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

                              <div className="NewSkill" id="NewSkill">


                              
                              </div>

                             </form>
                              
                             </div>

                                  <div className="border my-4 w-50 m-auto "></div>
                                  
                           
                          </div> 
                       
                       </div> 
                       </div>
               </div>
               
               
               
            </div>

            <div className="container-fluid mt-4 mb-1">
            <div className="text-right">
              
               <button className="btn bg-success px-5 text-white aboutpragragh text-bold cursor-pointer" onClick={this.sendData}>
                  Update
                   {/* <Link to="/profile" className="text-white aboutpragragh text-bold cursor-pointer text-decoration-none" >Submit</Link> */}
               </button>
               
            </div>
            </div>
            
          </>
      )
    }
}
export default UpdateExperience;