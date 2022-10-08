import React,{Component} from "react";
import {Route , Routes} from 'react-router-dom';
import Home from "./Home/Home";
import Login from "./LoginPage/Login";
class ProtectedRoutes extends Component{


    render(){

        let token = localStorage.getItem("token");
        if(token){
            return(
                <Routes>
                    <Route path="/home" component ={Home}/>
                </Routes>
            );
        }
        else {
            return(
                
                <Routes>
                    <Route path="/login" component ={Login}/>
                </Routes>
                
            );
        }
       
    }
}



export default ProtectedRoutes;