import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Card, CardHeader, CardBody, CardFooter, Typography, } from "@material-tailwind/react";
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';


const DoctorInfoBox = ({ doctor }) => {

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate(); 
    const handleOpen = () => setOpen(!open);
    const token = useSelector((state) => state.auth.token);
    // console.log(token);

    const { profileImageUrl, education, specialization, userId, user } = doctor;
    const [clinicInfo, setClinicInfo] = useState(null);

    useEffect(() => {
      const fetchClinicInfo = async () => {
        try {
          const response = await axios.get(`http://localhost:8081/api/v1/personal-info/clinic/${userId}`); 
          setClinicInfo(response.data);
        } catch (error) {
          console.error('Error fetching clinic information:', error);
        }
      };
      fetchClinicInfo();
    }, []);

    const handleBookAppointment = () => {
        if (token) {
            navigate(`/book/${user?.firstName} ${user?.lastName}`);
        } else {
            navigate('/login'); // Assuming the login page route is '/login'
        }
    };

    return (
        <motion.div   initial = {{opacity: 0, y : "10%"}}
        animate = {{opacity: 1, y : "0%"}}
        transition={{duration : 0.4, delay : 1,  power : "easeIn"}}>
            <Card className="my-6 mx-1 lg:w-[20vw] lg:h-[40vh] w-[75vw] cursor-pointer">
                <CardHeader color="blue-gray" className="relative h-[50%] ">
                    <img
                        src={user?.gender == 'Male' ? 'https://i.ibb.co/74cXTYF/Male-Profile-Icon.png' : 'https://i.ibb.co/FXGmr2K/Female-Profile-Icon.jpg'}
                        alt="card-image"
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                </CardHeader>
                <CardBody className='h-[30%] '>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                    {user?.firstName} {user?.lastName}
                    </Typography>
                    <Typography variant="paragraph" color="blue-gray" className="mb-0">
                        {specialization}
                    </Typography>
                </CardBody>

                <CardFooter className="pt-2 h-[20%]">
                    <Button onClick={handleOpen} variant="filled">
                        Show Details
                    </Button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>{user?.firstName} {user?.lastName}</DialogHeader>
                        <DialogBody>

                            <i>{user?.firstName} {user?.lastName}</i> is a highly skilled medical professional with a degree in <i>{specialization}</i>.
                            With extensive education from <i>{education}</i>,<i>{user?.firstName} {user?.lastName}</i> brings a wealth of knowledge and expertise to their practice.
                            Specializing in <i>{specialization}</i>,<i>{user?.firstName} {user?.lastName}</i> is dedicated to providing personalized and compassionate care to each patient.
                            <i>{user?.firstName} {user?.lastName}</i> employs the latest medical advancements and techniques to ensure the highest quality of care.
                            Known for their meticulous attention to detail and commitment to excellence,<i>{user?.firstName} {user?.lastName}</i> is trusted by patients for their expertise and dedication to improving health outcomes.

                            <Typography variant="paragraph" color="blue-gray" className="mt-5">
                                Clinic address - {clinicInfo?.address?.building + ', ' + clinicInfo?.address?.area + ', ' + clinicInfo?.address?.landmark + ', ' + clinicInfo?.address?.townCity + ', ' + clinicInfo?.address?.state}
                            </Typography>
                            <Typography variant="h6" color="blue-gray" className="mt-2">
                                Timings - {clinicInfo?.clinics?.openingTime} to {clinicInfo?.clinics?.closingTime}
                            </Typography>


                        </DialogBody>
                        <DialogFooter>
                            <Button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-1"
                            >
                                <span>Go Back</span>
                            </Button>
                            <Button variant="gradient" color="green" onClick={handleBookAppointment}>
                                <span>Book Appointment</span>
                            </Button>
                        </DialogFooter>
                    </Dialog>

                </CardFooter>
            </Card>
        </motion.div>
    )
}

export default DoctorInfoBox

