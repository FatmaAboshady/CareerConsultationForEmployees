import { Component } from "react";
import img1 from '../../images/Computer.png';
import './Login.css';
import {Link} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from 'axios';
class Login extends Component {
    state = {
        errorMessage:""
    }
    user = {
        email :"",
        password :"",
        }
        getFormData =(e)=> {
            this.user[e.target.name]=e.target.value ;
            console.log(this.user);
        }
        
        sendData = async(e) => {
            e.preventDefault();
          let {data} = await axios.post("https://gradiuation.herokuapp.com/api/user/login" , this.user );
          console.log(data);
          localStorage.setItem("token" , data.token);
          let token = localStorage.getItem("token") ;
          let decoded = jwt_decode(token);
          console.log(decoded.user);
          localStorage.setItem("userId" , decoded.user);
           if(data.token){
            
            window.location.pathname = "home";
            e.target.reset();
        }
        else{
            this.setState({
            errorMessage:data.message
       })
        
        
        }
    }
    render(){
       return(
           <>
              <div className="row p-0 m-0">
                <div className="col-md-6 bg-success d-flex justify-content-center align-items-center leftSide">
                    <img src={img1} className="w-75" alt="" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                   <div>
                   <h3 className="text-success text-center pb-4">Please Log In Frist</h3>
                    <form action="" onSubmit={this.sendData} id="form1">
                    <input type="Email" onChange={this.getFormData} placeholder="Email" className="w-100 py-2 mb-2 border border-none" name="email" />
                    <input type="password" onChange={this.getFormData} placeholder="Password" className="w-100 py-2 border border-none" name="password"/>
                    {this.state.errorMessage}
                    <div className="text-right">
                        <a href="" className="text-muted">Forget password?</a>
                    </div>
                    <button type="submit" onClick={this.sendData} className="text-white bg-success w-100 btn mt-3">Log In</button>
                    </form>
                    <div className="text-center mt-3">
                    <Link to="/Register" className="text-muted">create an account</Link>
                    </div>
                   </div>
                </div>

              </div>
              
              
           </>
       )
    }
}
export default Login;
