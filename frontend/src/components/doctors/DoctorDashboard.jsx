import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../pages/Navbar'
import DoctorNavbar from './DoctorNavbar'


const DoctorDashboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className=' bg-blue-gray-100 min-h-[10vh] py-5 px-2 flex items-center'>
        <DoctorNavbar/>
      </div>
        <div className='h-[10vh] w-full bg-purple-200'>
            <h1>DoctorDashboard</h1>
            <h1> <NavLink to={"/doctor/info"}>enquiry</NavLink></h1>
            <h1><NavLink to={"/doctor/profile"}>Profile</NavLink></h1>
            <h1><NavLink to={"/doctor/appointments"}>Appointment</NavLink></h1>
        </div>

        <Outlet ></Outlet>
        
    </>
  )
}

export default DoctorDashboard