import React from 'react'
import { Textarea } from "@material-tailwind/react";
import logo from "../../assets/logo/default.png"

const PrevReport = () => {
    return (
        <div className='bg-[#CFD8DB] h-[100vh] w-full flex justify-center items-center'>
            <div className='bg-white min-h-[55vh] w-[90vw] rounded-xl shadow-2xl p-6'>
                <img src={logo} alt="" width={200} className='ml-auto mr-auto'  />
                <h1 className='mt-4'>By Doctor : Doctor name </h1>
                <h1 className='mt-4'>Date : {Date.now()}</h1>
                <h1 className='mt-4'>Subject : </h1>
                <h1 className='mt-4'>Mode : Online</h1>
                <div>
                    <h1 className='mt-4'>Summary : </h1>
                    <div className="w-full mt-4">
                        <Textarea label= "Banda acha tha but bada jaldi chala gaya" disabled />
                    </div>
                </div>
                <div>
                    <h1 className='mt-4'>Medicines Prescribed : </h1>
                    <div className="w-full mt-4">
                        <Textarea label= "ye dawai sone ke baad uthne se pehle" disabled />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PrevReport