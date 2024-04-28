import React, { useState } from 'react'
import { Card, CardHeader, CardBody, Typography, Avatar, } from "@material-tailwind/react";
import { motion } from "framer-motion"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../services/Operations/authAPI';
import { useNavigate } from 'react-router-dom';

const PatientProfile = () => {
  const user = useSelector((state) => state.profile.user);
  const [name,SetName] = useState(`${user.firstName} ${user.lastName}`);
  const [image,SetImage] = useState("https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1818581771.1714327882&semt=sph");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <motion.div 
    initial = {{scale : 0, height :0}}
    animate = {{scale : 1, height : "70vh"}}
    transition = {{duration : 0.5}}
      className=' flex justify-center items-center'>
      <Card
        shadow={false}
        className="relative grid h-[70vh] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url(https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1818581771.1714327882&semt=sph)] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography variant="h5" className="mb-4 text-gray-400">
            {name}
          </Typography>
          <Typography
            variant="h4"
            color="white"
            className="mb-6 font-bold hover:scale-[1.1] hover:text-gray-500 leading-[1.5]"
          >
            <button onClick={handleLogout}>Log Out</button>
          </Typography>
          <Avatar
            size="xl"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white"
            src={image}
          />
        </CardBody>
      </Card>
    </motion.div>
  )
}

export default PatientProfile