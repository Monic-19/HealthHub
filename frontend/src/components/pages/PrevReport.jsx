import React, { useState } from 'react'
import { Textarea } from "@material-tailwind/react";
import logo from "../../assets/logo/default.png"
import { useMediaQuery } from '@mui/material';

const PrevReport = () => {
    const [image, SetImage] = useState("https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1818581771.1714327882&semt=sph");
    const isSmallScreen = useMediaQuery('(max-width: 600px)')
    return (
        <div className='bg-[#CFD8DB] h-[100vh] w-full flex justify-center items-center'>
            <div className='profile overflow-scroll bg-white h-[85vh] w-[90vw] rounded-xl shadow-2xl p-6'>
                <img src={logo} alt="" width={200} className='ml-auto mr-auto' />
                <h1 className='mt-4'>By Doctor : Doctor name </h1>
                <h1 className='mt-4'>Date : {Date.now()}</h1>
                <h1 className='mt-4'>Subject : </h1>
                <h1 className='mt-4'>Mode : Online</h1>
                <div>
                    <h1 className='mt-4'>Summary : </h1>
                    <div className="w-full mt-4">
                        <Textarea label="Banda acha tha but bada jaldi chala gaya" disabled />
                    </div>
                </div>
                <div>
                    <h1 className='mt-4'>Medicines Prescribed : </h1>
                    <div className="w-full mt-4">
                        <Textarea label="ye dawai sone ke baad uthne se pehle" disabled />
                        {image ? (
                            <img
                                src={image}
                                alt="Profile Preview"
                                style={{
                                    border: '2px dashed #ccc',
                                    borderRadius: '20px',
                                    padding: '20px',
                                    width: isSmallScreen ? "90vw" :'30vw',
                                    margin: '20px auto',
                                    cursor: 'pointer',
                                  }}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PrevReport