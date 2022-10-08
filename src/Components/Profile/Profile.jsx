import { Component } from "react";
import './Profile.css';
import img1 from '../../images/profil2e.jpg';
import CareerTemplate from "../Services/CareerTemplate.jsx";
import '../Services/CareerTemplate.css';
import Footer from "../Footer/Footer";
// import CareerTemplate from ".././LoginNavbar/login";


// import '.././LoginNavbar/login.css';






import {Link} from 'react-router-dom';
class Profile extends Component {
    render(){
       return(


           <>

           <div className=" bg-light">
               <div>
               <div className=" vh d-flex align-items-center bg-main">
              <div className="template w-75 m-auto  pt-5  bg-wight d-flex ">

              
              <div className="row row-cols-4 row-cols-md-2 g-4 bg-white mt-5 border p-5" >
  <div className="col ">
    <div className="card  pt-5">
    <img src={img1} className="w-75 m-auto" alt="" />
     
    </div>
  </div>
  <div className="col">
    <div className="card">
      <div className="card-body m-5">
<h2> fatma aboshady</h2>   
     <p className="card-text">full stack web design &development</p>
        <div className="width-50 m-auto h-1 bg-light"></div>
        <div className="mt-5">
            <div> <span className="fw-bold">name:</span> 22</div>
            <div> <span> age:</span></div>
            <div> <span> email:</span></div>
            <div> <span> phone:</span></div>

            
        </div>
      </div>
    </div>
  </div>
  
</div>

              
              

          </div>

          </div>

               </div>
          
          <div className="skills ">
              <h2 className=" text-center mt-5 p-5" > personal skills</h2>
              <div class="row row-cols-4 row-cols-md-2 g-4 bg-white mt-5 mb-5 border p-5 w-75 m-auto" >
                  <div className="col mt-4 ">
                  <div>
                      <h6>html</h6>

                  <div className="progress">
               <div className="progress-bar bg-main w-25" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
               </div>

                  </div>
         

              


                 </div>

                 <div className="col mt-4">
                  <div>
                      <h6>css</h6>

                  <div className="progress">
               <div className="progress-bar bg-main w-75" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
               </div>

                  </div>
         

              


                 </div>

                 <div className="col mt-4">
                  <div>
                      <h6>bootstrap</h6>

                  <div className="progress">
               <div className="progress-bar bg-main w-100" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
               </div>

                  </div>
         

              


                 </div>

                 <div className="col mt-4 ">
                  <div>
                      <h6>jquery</h6>

                  <div className="progress">
               <div className="progress-bar bg-main w-50" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
               </div>

                  </div>
         

              


                 </div>

                 <div className="col  mt-4">
                  <div>
                      <h6>html</h6>

                  <div className="progress">
               <div className="progress-bar bg-main w-25" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
               </div>

                  </div>
         

              


                 </div>

                 <div className="col  mt-4">
                  <div>
                      <h6>html</h6>

                  <div className="progress">
               <div className="progress-bar bg-main w-75" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
               </div>

                  </div>
         

              


                 </div>

                 <div className="col mt-4 mb-4">
                  <div>
                      <h6>html</h6>

                  <div className="progress">
               <div className="progress-bar bg-main w-50" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
               </div>

                  </div>
         

              


                 </div>

                 <div className="col mt-4">
                  <div>
                      <h6>html</h6>

                  <div className="progress">
               <div className="progress-bar bg-main w-25" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
               </div>

                  </div>
         

              


                 </div>
  </div>


             
          </div>
          <div className="education ">
              <h2 className=" text-center mt-5 p-5" >  Education</h2>
              </div>
              <div>
                  
              </div>
              <CareerTemplate/>


          <div className="experiance ">
              <h2 className=" text-center mt-5 p-5" >  Experiance</h2>
              </div>
              <div>
                  
              </div>
              <CareerTemplate/>

              <div className="container">
              <button className="btn bg-success px-5 my-5 ">
                    <Link to="/personalInfo" className="text-white aboutpragragh text-bold cursor-pointer text-decoration-none" >Update</Link>
              </button>
              </div>


<Footer/>

          

        

           </div>
         

         



        
           </>
       )
    }
}
export default Profile;