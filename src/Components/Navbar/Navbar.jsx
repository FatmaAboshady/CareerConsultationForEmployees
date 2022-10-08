import { Component } from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';
import Login from '../LoginPage/Login.jsx'
class Navbar extends Component {

  state={
    val :''}
  clickBtn =()=>{
   let token = localStorage.getItem("token");
   
   if(token){
    //  document.getElementById("navBtn").innerText= "Update";
      window.location.pathname= '/updateUser';
      this.state.val='/updateUser';
    }
   else{
    // document.getElementById("navBtn").innerText="LOG IN";
    this.state.val='/login';
    window.location.pathname ='/login'
    }

  }
  componentDidMount =()=>{
    let token = localStorage.getItem("token");
   
   if(token){
     document.getElementById("navBtn").innerText= "Update";
      
    }
   else{
    document.getElementById("navBtn").innerText="LOG IN";
    
    }
  }
    render(){
        return (
          <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand textColor" href="#">Consult</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      {/* <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li> */}
      <li className="nav-item mx-3">
        <Link className="nav-link text-dark" to="/home ">Home</Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-link text-dark" to="/about">About</Link>
      </li>
      <li className="nav-item dropdown mx-3">
        <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Servises
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/careerchoice">Career choice</Link>
          <Link className="dropdown-item" to="/training">career consultation</Link>
        </div>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-link text-dark" to="/contact">Contact Us</Link>
      </li>
      
    </ul>
    <button className="btn btn-success my-2 my-sm-0" onClick={this.clickBtn}>
      <Link to={this.state.val} className="text-white text-decoration-none" id="navBtn"> </Link> 
    </button>
   
  </div>
</nav>
</>
        );
    }
}
export default Navbar;