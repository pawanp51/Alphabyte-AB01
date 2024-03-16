import './App.css'
import Sidebar from './components/Sidebar'
import { Route,Routes, useLocation } from 'react-router-dom'
import { Landingpage } from './pages/Landingpage'
import  SignInFormDemo  from './pages/Signin'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import SignupFormDemo from './pages/Signup'
import RecruiterEdit from './pages/RecruiterEdit'
import CandidateEdit from './pages/CandidateEdit'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateJob from './components/CreateJob'
import ViewJobPosts from './components/ViewJobPosts';

axios.defaults.baseURL = "http://localhost:5000/";

function App() {
  const location = useLocation()
  console.log(location)
  const navigate = useNavigate();
  const role = useSelector(state => state.role)

  useEffect(() => {
    const role = localStorage.getItem('role')
    if(role){
      console.log(role)
    }
    else{
      localStorage.setItem('role','')
    }
  },[])

  if(location.pathname === '/'){
    return(
      <Landingpage/>
    )
  }

  return (
    <div className='min-h-screen bg-[#030519] flex md:flex-row flex-col md:justify-between'>
    <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      <div className='md:min-w-72 md:max-w-72 w-full'>
         <Sidebar/>
      </div> 
      <div className="p-4 w-full">
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/about" element={<h1 className="text-3xl font-bold text-center text-white">About</h1>} />
          
          <Route path="/signup" element={<SignupFormDemo/>} />
          <Route path="/signin" element={<SignInFormDemo/>} />
          
          <Route path='/edit' element={role === 'recruiter' ? <RecruiterEdit/> : <CandidateEdit/> } />
          <Route path='/createJob' element={<CreateJob/>}/>
          <Route path='/viewJobPosts' element={<ViewJobPosts/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
