import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Input } from "@material-tailwind/react";
import DoctorInfoBox from './DoctorInfoBox';
import { motion } from "framer-motion";
import Loader from "./Loader"

const Appointment = () => {

  const doctorCategories = [
    "Ophthalmology",
    "Cardiology",
    "Orthopedics",
    "Oncology",
    "Dentistry",
    "ENT (Ear, Nose, Throat)",
    "Neurology",
    "Allergy and Immunology",
  ];

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


  const doctors = [
    {
      profileImageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww",
      name: "Dr. John Doe",
      degree: "MD, MBBS, FRCS",
      specialization: "Cardiology",
      education: "Harvard Medical School",
      state: "Uttar Paradesh",
      city: "Noida",
      clinicAddress: "123 Main Street, Cityville",
      availability: "Monday, Tuesday, Friday",
      timings: "9 AM - 12 PM",
      description: "Experienced cardiologist specializing in heart conditions.",
    },
    {
      profileImageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww",
      name: "Dr. Jane Smith",
      degree: "MD, MBBS",
      specialization: "Dermatology",
      education: "Stanford University School of Medicine",
      state: "Rajasthan",
      city: "Ajmer",
      clinicAddress: "456 Elm Street, Townsville",
      availability: "Tuesday, Thursday, Saturday",
      timings: "12 PM to 3 PM",
      description: "Dermatologist providing expert care for skin issues.",
    },
    {
      profileImageUrl: "https://images.unsplash.com/photo-1612943680768-d82060323fd5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Dr. Michael Johnson",
      degree: "MD, PhD",
      specialization: "Neurology",
      education: "Yale School of Medicine",
      state: "Rajasthan",
      city: "Kishangarh",
      clinicAddress: "789 Oak Avenue, Villagetown",
      availability: "Monday, Wednesday, Friday",
      timings: "9 AM - 12 PM",
      description: "Neurologist with extensive experience in treating neurological disorders.",
    },
    {
      profileImageUrl: "https://images.unsplash.com/photo-1612636320854-776180f479d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
      name: "Dr. Emily Rodriguez",
      degree: "MD, MBBS",
      specialization: "Pediatrics",
      education: "Columbia University Vagelos College of Physicians and Surgeons",
      state: "Gujarat",
      city: "Vadodara",
      clinicAddress: "101 Pine Street, Hamletville",
      availability: "Monday to Saturday",
      timings: "3 PM - 6 PM",
      description: "Pediatrician providing compassionate care for children of all ages.",
    },
    {
      profileImageUrl: "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
      name: "Dr. David Lee",
      degree: "MD, MBBS, FRCS",
      specialization: "Orthopedics",
      education: "University of California, San Francisco School of Medicine",
      state: "Haryana",
      city: "Karnal",
      clinicAddress: "321 Maple Avenue, Suburbia",
      availability: "Wednesday, Thursday, Saturday",
      timings: "12 PM - 3 PM",
      description: "Orthopedic surgeon specializing in bone and joint disorders.",
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctors.filter(doctor => {
    return (
      doctor.doctorName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.state?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.timings?.toLowerCase().includes(searchQuery.toLowerCase())
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
              // <Animation/>
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