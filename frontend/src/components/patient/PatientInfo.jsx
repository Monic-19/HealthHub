import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Card, Typography, Input, Checkbox, Button, } from "@material-tailwind/react";

const PatientInfo = () => {
  const [name, setName] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  return (
    <div className='p-5 '>
       <motion.div
        initial={{ x : -300, opacity : 0}}
        animate={{ x : 0, opacity : 1 }}
        transition={{ duration: 0.5 }}
        className=" h-[67vh] w-[100%] flex justify-center">
          <div>

        <form className=" mb-2 p-4 w-[90vw] max-w-screen-lg sm:w-[35vw] overflow-y-scroll lg:pb-[0vh] pb-[10vh] docInputForm bg-white h-[65vh]">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Phone Number
            </Typography>
            <Input
              type="tel"
              size="lg"
              placeholder="9999888777"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setMobileNumber(e.target.value)}
              value={mobileNumber}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Profile Photo
            </Typography>
            <Input
              type="file"
              size="lg"
              onChange={(e) => setProfilePhoto(e.target.value)}
              value={profilePhoto}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Address
            </Typography>
            <Input
              size="lg"
              placeholder="address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />

          </div>



          <Button className="mt-6" fullWidth>
            Submit
          </Button>

        </form>
          </div>
      </motion.div >
    </div>
  )
}

export default PatientInfo