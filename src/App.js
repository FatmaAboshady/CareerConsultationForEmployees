import {Component} from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.js';
import {Route ,Routes} from 'react-router-dom';
import Login from './Components/LoginPage/Login.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import PersonalInformation from './Components/RegisterationPage/PersonalInformation.jsx';
import CareerChoice from './Components/Services/CareerChoice.jsx';
import Training from './Components/Services/Training.jsx';
import CareerShift from './Components/Services/CareerShift.jsx';
import Education from './Components/RegisterationPage/Education.jsx';
import Experiance from './Components/RegisterationPage/Experiance.jsx';
import Loading from './Components/LOADING/Loading.jsx';
import Profile from './Components/Profile/Profile.jsx';
import ProtectedRoutes from './Components/ProtectedRoutes.jsx';
import Test from './Components/RegisterationPage/test.jsx';
import UpdateUser from './Components/Update/UpdateUser.jsx';
import UpdateEducation from './Components/Update/UpdateEducation.jsx';
import UpdateExperience from './Components/Update/UpdateExperience.jsx';
class App extends Component {

  state = {
    loading: true
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2000));
  };

  render(){
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }
    return (
      <>
     
     <Navbar/>
      
      <Routes>
      <Route path='/login' element={<Login/>} /> 
      <Route path='/home' element={<Home/>}/>
      <Route path='/updateEducation' element={<UpdateEducation/>}/>
      <Route path='/updateExperiance' element={<UpdateExperience/>}/>
      <Route path='/test' element={<Test/>}/>
      {/* <ProtectedRoutes path="/home" component={Home}/> */}
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/careerchoice' element={<CareerChoice/>}/>
      <Route path='/careershift' element={<CareerShift/>}/>
      <Route path='/training' element={<Training/>}/>
       <Route path='/Register' element={<PersonalInformation/>} />
       <Route path='/education' element={<Education/>} />
       <Route path='/personalInfo' element={<PersonalInformation/>} />
       <Route path='/experiance' element={<Experiance/>} />
       <Route path='/profile' element={<Profile/>} />
       <Route path='/updateUser' element={<UpdateUser/>} />
       <Route exact path='/' element={<Home/>} />

      </Routes>
      
      
      </>
    );
  }
}
export default App;


