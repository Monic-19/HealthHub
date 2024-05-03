import React from "react";
import {
    Typography,
    Button,
    Card,
    CardBody,
    CardHeader,
} from "@material-tailwind/react";
import { TiTick } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { easeIn, motion } from "framer-motion";
import { useSelector } from "react-redux";


function ComponentCard({
    title,
    desc,
    price,
    options,
}) {
    const appointmentInformation = useSelector((state) => state.appointment.appointmentsFee);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, power: easeIn, delay: 0.3 }}
        >
            <Card
                variant="gradient"
                color="white"
                className=" border-2 border-black"
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="!m-0 p-6"
                >
                    <Typography
                        variant="h2"
                        color="blue-gray"
                        className="capitalize font-bold mb-1"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="small"
                        className="font-normal !text-gray-500"
                    >
                        {desc}
                    </Typography>
                    <Typography
                        variant="h3"
                        color="blue-gray"
                        className="mt-4 flex gap-1 !text-4xl"
                    >
                        {appointmentInformation}
                        <Typography
                            as="span"
                            color="blue-gray"
                            className="-translate-y-0.5 self-end opacity-70 text-lg font-bold"
                        >
                            /{price[2]}
                        </Typography>
                    </Typography>
                </CardHeader>
                <CardBody className="pt-0">
                    <ul className="flex flex-col gap-3 mb-6">
                        {options.map((option, key) => (
                            <li
                                key={key}
                                className="flex items-center gap-3 text-gray-700"
                            >
                                {option.icon}
                                <Typography
                                    variant="small"
                                    className="font-normal text-inherit"
                                >
                                    {option.info}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                 
                        <Button
                            fullWidth
                            variant="gradient"
                            color="gray"
                            onClick={() => alert("payment Done")}
                        >
                            Book Now
                        </Button>
           
                </CardBody>
            </Card>
        </motion.div>
    );
}


const AppointmentBookingPage = () => {
    const navigate = useNavigate();
    const cards = [
        {
            title: "online",
            desc: "Solve you doubts at your home.",
            price: ["₹", "500", " Session"],
            options: [
                {
                    icon: (
                        <TiTick
                            className="h-5 w-5 text-blue-gray-900"
                        />
                    ),
                    info: "Get a conformation mail"
                },
                {
                    icon: (
                        <TiTick
                            className="h-5 w-5 text-blue-gray-900"
                        />
                    ),
                    info: "Link will be shared"
                },
                {
                    icon: (
                        <TiTick
                            className="h-5 w-5 text-blue-gray-900"
                        />
                    ),
                    info: "Average duration 20-25 minutes"
                },
                {
                    icon: (
                        <TiTick
                            className="h-5 w-5 text-blue-gray-900"
                        />
                    ),
                    info: "Easier solution"
                },
            ],
        },
        {
            title: "offline",
            desc: "Book a clinic visit.",
            price: ["₹", "500", " Visit"],
            options: [
                {
                    icon: (
                        <TiTick
                            className="h-5 w-5 text-blue-gray-900"
                        />
                    ),
                    info: "Get a confirmation mail"
                },
                {
                    icon: (
                        <TiTick
                            className="h-5 w-5 text-blue-gray-900"
                        />
                    ),
                    info: "Address with timming will be shared"
                },
                {
                    icon: (
                        <TiTick
                            className="h-5 w-5 text-blue-gray-900"
                        />
                    ),
                    info: "Doctor will be avaliable at that time"
                },
                {
                    icon: (
                        <TiTick
                            className="h-5 w-5 text-blue-gray-900"
                        />
                    ),
                    info: "Better for major problems"
                },

            ],
        },

    ];

    return (
        <section className="py-12 px-8">
            <div className="container mx-auto">
                <Typography color="blue-gray" className="mb-4 font-bold text-lg">
                    Book Appointment
                </Typography>

                <Typography variant="h1" color="blue-gray" className="mb-4 !leading-snug lg:!text-4xl !text-2xl max-w-2xl">
                    Select the option which is more feasiable to You.
                </Typography>
                <Typography variant="lead" className="mb-10 font-normal !text-gray-500 max-w-xl">
                    You can choose from online as well as offline appointments.
                </Typography>
                <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl">
                    {cards.map(({ title, desc, options, price }, key) => (
                        <ComponentCard
                            key={key}
                            title={title}
                            desc={desc}
                            price={price}
                            options={options}
                        />
                    ))}
                </div>
                <Typography variant="small" className="mt-10 font-normal !text-gray-500">
                    *Once the booking is done it cant be refunded after 1 Hour of booking.
                </Typography>
                <Button
                    fullWidth
                    variant="gradient"
                    color="gray"
                    className="lg:w-[20vw]  my-5"
                    onClick={() => { navigate(-1) }}
                >
                    Go Back
                </Button>
            </div>
        </section>
    )
}

export default AppointmentBookingPage