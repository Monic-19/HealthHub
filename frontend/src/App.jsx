import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' 
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Error from './components/pages/Error'
import Hero from './components/pages/HeroPage/Hero'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Appointment from './components/pages/Appointment'
import DoctorDashboard from './components/doctors/DoctorDashboard'
import DoctorProfile from './components/doctors/DoctorProfile'
import DoctorInfo from './components/doctors/DoctorInfo'
import AdminDashboard from './components/admin/AdminDashboard'
import DoctorAppointments from './components/doctors/DoctorAppointments'
import VerifyEmail from './components/pages/VerifyEmail'

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Hero/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/signup' element={<Signup/>}/> 
          <Route path='/verifyemail' element={<VerifyEmail/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/appointment/:id' element={<Appointment/>}/> 
          <Route path='/doctor' element={<DoctorDashboard/>}>
               <Route path='profile' element={<DoctorProfile/>}></Route>
               <Route path='info' element={<DoctorInfo/>}></Route>
               <Route path='appointments' element={<DoctorAppointments/>}></Route>
          </Route>
          <Route path='/admin' element={<AdminDashboard/>} />
          <Route path='*' element={<Error/>}/> 
        </Routes>
      </Router>

    </>
  )
}

export default App;
