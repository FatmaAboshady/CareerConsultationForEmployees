import { Component } from "react";
import img1 from '../../images/Forms.png';
import {Link} from 'react-router-dom';
import axios from "axios" ;
class PersonalInformation extends Component {
   
       

    
        user = {
        fName :"",
        lName:"",
        phone :"",
        dateOfBirth :"",
        address :"",
        gender: "",
        email : "",
        password : "" ,
        confirmPassword :"",
        country : "",
        photo : "" ,
        }
    
    
        getFormData =(e)=> {
            this.user[e.target.name]=e.target.value;
             console.log(this.user);
            
        }
        
        sendData = async(e) => {
          e.preventDefault();
        

        let {data} = await axios.post("https://gradiuation.herokuapp.com/api/user/register" , this.user)
        console.log(data)
        // console.log('id'+ data);
          let x= document.getElementById("form1").checkValidity();
          let y= document.getElementById("form2").checkValidity();
          if (!x || !y) {
              alert("Please fill all fields");
              

          }else if (typeof(data)=='object'){
            alert('please chect password ')

          }
          
          else if ( data =='email is exist'){
            alert(data)
          }
          else {
            


            document.getElementById("form1").reset();
            document.getElementById("form2").reset();
            localStorage.setItem('userId',data);
            localStorage.setItem('date', this.user.dateOfBirth);
            localStorage.setItem('password',this.user.password);
            window.location.pathname = "education"
          }
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
                <div className="col-md-4">
                        <div className="container">
                          <form onSubmit={this.sendData} name="form1" id ="form1">
                            <input type="text" onChange={this.getFormData} className="form-control form-group py-4" placeholder="Frist Name" name="fName" id="fName" required />
                            <p className="text-danger" id ="fillwarning"></p>
                            <input type="text" onChange={this.getFormData} className="form-control form-group py-4" placeholder="Last Name"  name="lName" id="lNmae" required/>
                            <p className="text-danger" id ="fillwarning"></p>
                            <input type="text" onChange={this.getFormData} className="form-control form-group py-4" placeholder="Your Phone"  name="phone" id="phone" required/>
                            <p className="text-danger" id ="fillwarning"></p>
                            <input type="date" onChange={this.getFormData} className="form-control form-group py-4" name="dateOfBirth" />
                            <textarea name="address" id="" onChange={this.getFormData} className="form-control form-group" placeholder="Your Address"></textarea>
                            
                           </form>
                            
                        </div>
                </div>
                <div className="col-md-4">
                <div className="container">
                            <img src={img1} className="w-75" alt="" />
               </div>
                </div>
                <div className="col-md-4">
                <div className="container">
                       <form name="form2" onSubmit={this.sendData} id ="form2">
                       <input type="email" onChange={this.getFormData} className="form-control form-group py-4" placeholder="Email" name="email" required/>
                            <input type="password" onChange={this.getFormData} className="form-control form-group py-4" placeholder="Password" name="password" required/>
                            <input type="password" onChange={this.getFormData} className="form-control form-group py-4" placeholder="Confirm Your Password" name="confirmPassword" required />
                            
                               <select id="country" onChange={this.getFormData} name="country" className=" form-group py-2 form-control bg-transparent"  required>
                                <option value="" selected disabled >Choose your country</option>
                                <option value="cairo">Cairo</option>
                                <option value="Alex"  >Alexandria</option>
                                <option value="Giza"  >Giza</option>
                                <option value="Ismaalyia">Ismaalyia</option>
                                <option value="Aswan">Aswan</option>
                                <option value="Asyut">Asyut</option>
                                <option value="Port Said">Port Said</option>
                                <option value="Suez">Suez</option>
                                <option value="Qalyubia">Qalyubia</option>
                                <option value="Luxor">Luxor</option>
                                <option value="Dakahlia">Dakahlia</option>
                                <option value="Gharbia">Gharbia</option>
                                <option value="Faiyum">Faiyum</option>
                                <option value="Sharqia">Sharqia</option>
                                <option value="Damietta">Damietta</option>
                                <option value="Beheira">Beheira</option>
                                <option value="Minya">Minya</option>
                                <option value="Qena">Qena</option>
                                <option value="Sohag">Sohag</option>
                                <option value="New Vally">New Vally</option>
                                <option value="Beni Suef">Beni Suef</option>
                                <option value="Red Sea">Red Sea</option>
                                <option value="Monufia">Monufia</option>
                                <option value="Kafr el-Sheikh">Kafr el-Sheikh</option>
                                <option value="Sinai">Sinai</option>
                                <option value="Matrouh">Matrouh</option>
                                
                                
                            </select>
                            <p className="text-muted aboutpragragh">Gender</p>
                            <label htmlFor="" className="text-dark aboutpragragh mr-1">Female</label><input type="radio" onChange={this.getFormData} value="female" name="gender"/>
                            <label htmlFor="" className="text-dark aboutpragragh mr-1 ml-3">male</label> <input type="radio" onChange={this.getFormData} value="male" name="gender"/>
                            
                            {/* <p className="text-muted aboutpragragh">Your Photo</p>
                            <input type="file" onChange={this.getFormData} className=" form-group " name ="photo"/> */}
                           
                            </form>
                        </div>
                </div>
                
             </div>

             <div className="container-fluid pt-4">
             <div className="text-right">
          
                <button type="submit" onClick={this.sendData}  className="btn bg-success px-5 text-white aboutpragragh text-bold">
                 Save
                {/* <Link to = {"/education/"} className="text-white aboutpragragh text-bold cursor-pointer text-decoration-none"  >save</Link> */}
                </button>
                
                
             </div>
             </div>
             
           </>
       )
    }
}
export default PersonalInformation;
