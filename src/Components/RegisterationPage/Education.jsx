import { Component } from "react";
import img1 from '../../images/Forms.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import axios from "axios" ;
class Education extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        
        major:[],
        minor:[],
        degree:[],
       }; 
       
      }
   
 
   user = {
        educationLevel :"",
        university :"",
        college: "",
        fieldOfStudy: "",
        graduationYear : "" ,
        grade :"",
        

        }
        userId = localStorage.getItem("userId");
        
        getFormData =(e)=> {
            this.user[e.target.name]=e.target.value ;
            console.log(this.user);
            
        }
        
        sendData = async(e ) => {
          e.preventDefault();
          
          let {data} = await axios.post(`https://gradiuation.herokuapp.com/api/receiveEducation/${this.userId}` , this.user);
          console.log(this.userId);
          console.log(data);
          window.location.pathname = "experiance"
          
          
          let x=  document.getElementById("form1").checkValidity();
          if (!x) {
              alert("Please fill this field");
          }
          else{
            document.getElementById("form1").reset();
          }
            
        }

        getApiFordegree = async() => {
            let {data} = await axios.get("https://sara-app-15.herokuapp.com/degree" );
            
              this.setState({      
                degree:data.data,
              })
           }
        getApiForMajor = async() => {
              let {data} = await axios.get("https://sara-app-15.herokuapp.com/major" );
              
                this.setState({
                  major:data.data,
                  
                })
                
             }

             getApiForMinor = async() => {
                let {data} = await axios.get("https://sara-app-15.herokuapp.com/minor" );
                
                  this.setState({
                    
                    minor:data.data,
                  })
               }
       componentDidMount(){
               this.getApiForMajor();
               this.getApiForMinor();
               this.getApiFordegree();
             }
            
       
      


    render(){
       return(
           <>
              <div className="pt-5 mb-5">
            
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
                <div className="col-md-6">
                        <div className="container">
                        <form action="" onSubmit={this.sendData} id="form1">
                        <label htmlFor="educationLevel" className="text-dark ml-2 mt-2">Education Level</label>

                            <select name="educationLevel" id="educationLevel" onChange={this.getFormData} className="form-control border border-muted form-group">
                            <option>-----Select-----</option>
                              {
                              this.state.degree.map((value , index) =>
                                 {
                                return(
                                  <option key={index}>
                                  {value.degree_name}
                                  </option>
                                )
                              })
                       }
                               </select>
                          <label  className="text-dark ml-2">Your University </label>
                            <input type="text" onChange={this.getFormData} className="form-control form-group py-3" placeholder="Unversity" name="university" />
                            <label  className="text-dark ml-2">Your College </label>
                            <select name="college" id="" onChange={this.getFormData} className="form-control border border-muted form-group">
                            <option>-----Select-----</option>
                              {
                              this.state.major.map((value , index) =>
                                 {
                                return(
                                  <option key={index}>
                                  {value.major_description}
                                  </option>
                                )
                              })
                       }
                               </select>
                           
                            <label  className="text-dark ml-2">Field Of Study </label>
                            <select name="fieldOfStudy" id="" onChange={this.getFormData} className="form-control border border-muted form-group">
                            <option>-----Select-----</option>
                              {
                              
                              this.state.minor.map((value , index) =>
                                 {
                                return(
                                  <option key={index}>
                                  {value.minor_description}
                                  </option>
                                )
                              })
                       }
                               </select>
                            <label  className="text-dark ml-2">Graduation Year </label>
                            <input type="number" onChange={this.getFormData} className="form-control form-group py-3" placeholder="Graduation Year" name="graduationYear" />
                            <label htmlFor="grade" className="text-dark ml-2">Grade</label>
                            <select name ="grade" onChange={this.getFormData} id="grade" className="form-control">
                                <option value="choose" selected disabled> Choose your grade</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                
                            </select>
                        </form>
                            
                            
                        </div>
                </div>
                
                
                
             </div>

             <div className="container-fluid mt-4 mb-1">
             <div className="text-right">
             
             
                <button onClick={this.sendData} className="btn bg-success px-5 text-white aboutpragragh text-bold cursor-pointer">
                 Save
                    {/* <Link to="/skills" className="text-white aboutpragragh text-bold cursor-pointer text-decoration-none" >Next</Link> */}
                </button>
                
             </div>
             </div>
           </>
       )
    }
}
export default Education;
