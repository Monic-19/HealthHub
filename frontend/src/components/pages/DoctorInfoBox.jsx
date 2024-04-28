import React from 'react'
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Card, CardHeader, CardBody, CardFooter, Typography, } from "@material-tailwind/react";
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';


const DoctorInfoBox = ({ doctor }) => {

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate(); 
    const handleOpen = () => setOpen(!open);

    const {
        profileImageUrl, name, degree, specialization, education,state,city, clinicAddress, availability, description, timings } = doctor;

    return (
        <motion.div   initial = {{opacity: 0, y : "10%"}}
        animate = {{opacity: 1, y : "0%"}}
        transition={{duration : 0.4, delay : 1,  power : "easeIn"}}>
            <Card className="my-6 mx-1 lg:w-[20vw] lg:h-[40vh] w-[75vw] cursor-pointer">
                <CardHeader color="blue-gray" className="relative h-[50%] ">
                    <img
                        src={profileImageUrl}
                        alt="card-image"
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                </CardHeader>
                <CardBody className='h-[30%] '>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {name}
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
                        <DialogHeader>{name}</DialogHeader>
                        <DialogBody>

                            <Typography variant="h5" color="blue-gray" className="mb-3">
                                {description}
                            </Typography>

                            <i>{name}</i> is a highly skilled medical professional with a <i>{degree}</i> in <i>{specialization}</i>.
                            With extensive education from <i>{education}</i>,<i>{name}</i> brings a wealth of knowledge and expertise to their practice.
                            Specializing in <i>{specialization}</i>,<i>{name}</i> is dedicated to providing personalized and compassionate care to each patient.
                            <i>{name}</i> employs the latest medical advancements and techniques to ensure the highest quality of care.
                            Known for their meticulous attention to detail and commitment to excellence,<i>{name}</i> is trusted by patients for their expertise and dedication to improving health outcomes.

                            <Typography variant="paragraph" color="blue-gray" className="mt-5">
                                Clinic address - {clinicAddress  +` , ${city} , ${state} `}
                            </Typography>
                            <Typography variant="paragraph" color="blue-gray" className="mt-2">
                                Available on - {availability} 
                            </Typography>
                            <Typography variant="h6" color="blue-gray" className="mt-2">
                                Timings - {timings} 
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
                            <Button variant="gradient" color="green" onClick={handleOpen}>
                                <span onClick={() => { navigate(`/book/${name}`)}}>Book Appointment</span>
                            </Button>
                        </DialogFooter>
                    </Dialog>

                </CardFooter>
            </Card>
        </motion.div>
    )
}

export default DoctorInfoBox

