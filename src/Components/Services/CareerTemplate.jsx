import { Component } from "react";
import img1 from '../../images/Recommendation.png';
import './ServicesBackgroung.css';
import {Link} from 'react-router-dom';
import Footer from "../Footer/Footer";
class CareerTemplate extends Component {
    render(){
       return(
           <>

             
<div className="timeline mt-5 mb-5 position-relative ">
  <div className="containerr left">
    <div className="content">
      <h2>2017</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div className="containerr right">
    <div className="content">
      <h2>2016</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div className="containerr left">
    <div className="content">
      <h2>2015</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div className="containerr right">
    <div className="content">
      <h2>2012</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div className="containerr left">
    <div className="content">
      <h2>2011</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div className="containerr right">
    <div className="content">
      <h2>2007</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
</div>

           </>
       )
    }
}
export default CareerTemplate;



// import { Component } from "react";
// import img1 from '../../images/Recommendation.png';
// import './ServicesBackgroung.css';
// import './CareerTemplate.css';
// import axios from "axios" ;
// // import classNames from "classnames";
// import {Link} from 'react-router-dom';
// import Footer from "../Footer/Footer";
// import CareerTemplate from "./CareerTemplate";
// class CareerChoice extends Component {
//   userId = localStorage.getItem("userId");
//     job_id={
//      targetJob: "6628831e9ee5172a1288f59ef"
// }  

// constructor(props) {
//     super(props);
//     this.state = { 
//     plan:[]
//    }; 
//   }

// // state= {consultation:{}}


//   sendData = async(e ) => {
//     console.log("user id"+this.userId);
//     // console.log("job id"+this.job_id.targetJob);
//     let {data} = await axios.post(`https://gradiuation.herokuapp.com/api/careerPath/${this.userId}`, this.job_id);
//     console.log(data)
//     if(data.message=='career path exist'){

//       console.log(data.message)
// console.log(data.yourCareerPath)
// data=data.yourCareerPath

//     this.setState({plan:data
//     }
//     )
//     console.log("state" + data)

//     console.log("plan"+ this.state.plan);

//     }

//     // data=data.yourCareerPath
//     // this.setState({
//     //   plan:data,
//     // }) 
//   }
// componentDidMount(){
//    this.sendData();
   
//  }
 

//     render(){
//       let token = localStorage.getItem("token");

//       if(token){
      
//        return(



//            <>

           


//            <div className="services-bg d-flex align-items-center justify-content-center">
//                <div className="w-50">
//                <h3 className="text-white mb-5 ">“ There Is No Passion To Be Found In Playing 
//               Small - In Settling For A Life That Is Less 
//                 Than You Are Capable Of Living ”</h3>
//                 <h4 className="text-white ">NELSON MANDELA</h4>
//                </div>
//            </div>

//               {/* <div className="row p-0 m-0">
//               <div className=" col-md-6 overflow-hidden">
//               <img src={img1} alt="" className="w-75 " />
//               </div>
             
//               <div className="col-md-6 d-flex align-items-center ">
//                 <h3 className="text-muted">Your Personal <span className="text-success">Career Plan</span></h3>
//               </div>
//                 </div> */}
//                 <h2 className="text-muted text-center my-4">Your Personal <span className="text-success">career path</span></h2>
//                 <div className="timeline mt-5 mb-5 position-relative ">
                  
//                 {this.state.plan.map((value,index)=>{ 
//                   if(index%2==0) 
//                      return(   
//                           <>         
//                              <div className="containerr left ">
//                                  <div className="content">
 
                                                                      
//                                     <h4 className="text-center text-capitalize">{value}</h4>
//                                     {/* <h4 className="text-center text-capitalize">{value.technicalSkills[0]}</h4> */}

                                    


//                                        </div>
//                                        </div>                 
//                                                   </>
//                                                     )

//                   else 
//                   return(
//                     <>
//                     <div className="containerr right " >
//                        <div className="content">
 
                                                                      
//                        <h4 className="text-center text-capitalize">{value}</h4>
                                                       
   
   
//                                        </div>
//                                        </div> 
//                     </>
//                   )
//                                                 })}
  

// </div>   
//              <div className="my-5 w-auto ">
//                 <button className="btn bg-main px-5 m-auto text-center">
//                     <Link to="/Training" className="text-white text-center  text-bold cursor-pointer text-decoration-none" >view your trining plan</Link>
//                 </button>
                

//                 </div>

                



//                 <Footer/>
//            </>
//        )
//                                               }
//        else {
//         //  e.preventDefault();
 
//     alert("please login first");
//     window.location.pathname = "login"
//  }
//     }
// }
// export default CareerChoice;

