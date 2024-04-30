import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Input } from "@material-tailwind/react";
import DoctorInfoBox from './DoctorInfoBox';
import { motion } from "framer-motion";
import Loader from "./Loader";
import axios from 'axios';


const Appointment = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/v1/doctor/info'); 
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const doctorCategories = Array.from(new Set(doctors.map(doctor => doctor.specialization)));
  console.log(doctors);

  const [category, setCategory] = useState("");
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [date, setDate] = useState(getTodayDate());
  const [timings, setTimings] = useState('anytime');

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctors.filter(doctor => {
    return (
      doctor?.user?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor?.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor?.state?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor?.specialization?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor?.timings?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });


  return (
    <div>
      <Navbar />

      <div className='minh-[100vh] w-full'>
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, power: "easeIn" }}
          className="lg:h-[10vh] h-[30vh] my-5 flex flex-wrap items-center lg:justify-evenly justify-center gap-3 p-2">
          <h1 className="font-mono text-lg font-extrabold">Categories:</h1>
          {doctorCategories.map((categoryItem, index) => (
            <button
              key={index}
              className={`rounded-md border border-black px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black hover:text-white font-mono ${category === categoryItem ? 'bg-black text-white' : 'text-black'
                }`}
              onClick={() => { setCategory(categoryItem); setSearchQuery(categoryItem) }}
            >
              {categoryItem}
            </button>
          ))}
        </motion.div>

        <div className='bg-rose-500 lg:h-[90vh] h-[150vh] flex lg:flex-row flex-col-reverse p-4 lg:gap-2 gap-8'>

          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.8, power: "easeIn" }}
            className='doctor-appointment-box bg-blue-300 lg:w-[70%] w-[99%] h-[60%] lg:h-full rounded-3xl lg:ml-0 ml-[1%] p-6 flex gap-3 flex-wrap  overflow-x-scroll justify-evenly scroll-smooth'>

            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor, index) => (
                <DoctorInfoBox key={index} doctor={doctor} />
              ))
            ) : (
              <Loader ans={"Sorry, no doctors avaliable."}/>
            )}

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.8, power: "easeIn" }}
            className=' border-2 border-black lg:w-[30%] w-[99%]  lg:h-full h-[40%] bg-white flex flex-col items-center pt-8 lg:gap-8 gap-5 lg:ml-0 ml-[1%]'>

            <h1 className=' text-lg font-bold'>Search for In-Clinic Appointment </h1>

            <div className='w-[75%]'>
              <Input value={state} label="State" onChange={(e) => { setState(e.target.value); setSearchQuery(e.target.value) }} />
            </div>
            <div className='w-[75%]'>
              <Input value={city} label="City" onChange={(e) => { setCity(e.target.value); setSearchQuery(e.target.value) }} />
            </div>
            <div className='w-[75%]'>
              <Input variant="standard" label="Category" placeholder="Category" onChange={(e) => { setCategory(e.target.value); setSearchQuery(e.target.value) }} value={category} />
            </div>
            <div className='w-[75%]'>
              <Input variant="standard" value={doctorName} label="Search by doctors name" placeholder="name" onChange={(e) => { setDoctorName(e.target.value); setSearchQuery(e.target.value) }} />
            </div>
            <div className='w-[75%] mt-4'>
              <Input type="date" name="date" value={date}
                min={getTodayDate()} label="Date" onChange={(e) => { setDate(e.target.value) }} />
            </div>
            <div className='w-[75%]'>
              <select id="timeSlot" name="timeSlot" value={timings} className='border-[1px] rounded-md border-black w-full p-3 text-sm' onChange={(e) => { setTimings(e.target.value); setSearchQuery(e.target.value); setSearchQuery(e.target.value) }}>
                <option value="">Select Time</option>
                <option value="9 AM - 12 PM">9 AM - 12 PM</option>
                <option value="12 PM - 3 PM">12 PM - 3 PM</option>
                <option value="3 PM - 6 PM">3 PM - 6 PM</option>
                <option value="6 PM - 9 PM">6 PM - 9 PM</option>
              </select>
            </div>

            <div className=' h-[5vh] w-[75%] font-semibold  text-xl items-center lg:flex' hidden>
              <h1>Total search result :  {filteredDoctors.length}</h1>
            </div>

          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Appointment