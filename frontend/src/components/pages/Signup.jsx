import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Loader from "./Loader"
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ACCOUNT_TYPE } from '../../utils/constants';
import Tab from '../Buttons/Tab';
import { sendOtp, verifyEmailExistence } from '../../services/Operations/authAPI';
import { setSignupData } from '../../slices/authSlice';
import toast from 'react-hot-toast';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.PATIENT);
    const [submitClicked, setSubmitClicked] = useState(false);
    const initialMotion = {x: 300, opacity : 0};
    const finalMotion = {x : 0, opacity:1};
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.auth);
    
    const onSubmit = (data) => {
        if (submitClicked) {
            const emailExists = verifyEmailExistence({email: data.email});
            if(emailExists){
                toast.error('User already exists with email')
            } else {
                dispatch(setSignupData({firstName: data.firstName,lastName: data.lastName,email: data.email,password: data.password,role: accountType}));
                dispatch(sendOtp(data.email,navigate));  
            }
        }  
    };
    const tabData = [
        {
          id: 1,
          tabName: "Patient",
          type: ACCOUNT_TYPE.PATIENT,
        },
        {
          id: 2,
          tabName: "Doctor",
          type: ACCOUNT_TYPE.DOCTOR,
        },
    ]

    return (
        !loading ? (
        
        <div className='h-[100vh] w-full flex justify-center items-center'>
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    <motion.div initial={{x:-300 ,opacity : 0}} animate={{x:0 , opacity : 1}} transition={{duration : 0.5}}  className="relative flex  items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24  w-[100vw] h-[40vh] lg:h-[80vh] lg:w-[40vw]">
                        <div className="absolute inset-0">
                            <Loader ans={"Where care meet convenience"}/>
                        </div>
                    </motion.div>

                    <div className="flex  items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">

                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md ">
                            <motion.h2 initial={initialMotion}  animate={finalMotion} transition={{duration : 0.5}} className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</motion.h2>
                            <motion.p initial={initialMotion}  animate={finalMotion} transition={{duration : 0.7}}  className="mt-2 text-base text-gray-600">
                                Already have an account?{' '}
                                <Link
                                    to={"/login"}
                                    className="font-medium text-black transition-all duration-200 hover:underline"
                                >
                                    Log In
                                </Link>
                            </motion.p>
                            <form onSubmit={handleSubmit(onSubmit)} method="POST" className="mt-8">
                                <div className="space-y-5 ">
                                    <motion.div initial={initialMotion}  animate={finalMotion} transition={{duration : 0.9}} >
                                        <label htmlFor="firstName" className="text-base font-medium text-gray-900">
                                            {' '}
                                            First Name{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="First Name"
                                                id="firstName"
                                                {...register("firstName", { required: true })}
                                            ></input> 
                                        </div>
                                    </motion.div>
                                    <motion.div initial={initialMotion}  animate={finalMotion} transition={{duration : 0.9}} >
                                        <label htmlFor="lastName" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Last Name{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="Last Name"
                                                id="lastName"
                                                {...register("lastName", { required: true })}
                                            ></input>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={initialMotion}  animate={finalMotion} transition={{duration : 1.1}} >
                                        <label htmlFor="email" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Email address{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email"
                                                placeholder="Email"
                                                id="email"
                                                {...register("email", { required: true })}
                                            ></input>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={initialMotion}  animate={finalMotion} transition={{duration : 1.3}} >
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="text-base font-medium text-gray-900">
                                                {' '}
                                                Password{' '}
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="password"
                                                placeholder="Password"
                                                id="password"
                                                {...register("password", { required: true })}
                                            ></input>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={initialMotion}  animate={finalMotion} transition={{duration : 1.5}} >
                                        <Tab tabData={tabData} field={accountType} setField={setAccountType} />
                                    </motion.div>
                                    <motion.div initial={initialMotion}  animate={finalMotion} transition={{duration : 1.7}} >
                                        <button
                                            type="submit"
                                            onClick={() => setSubmitClicked(true)}
                                            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        >
                                            Create Account <FaArrowRightLong className="ml-2" size={16} />
                                        </button>
                                    </motion.div>
                                </div>
                            </form>
                            <motion.div initial={initialMotion}  animate={finalMotion} transition={{duration : 1.7}}  className="mt-3 space-y-3">
                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                >
                                    <span className="mr-2 inline-block">
                                        <svg
                                            className="h-6 w-6 text-rose-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                        </svg>
                                    </span>
                                    Sign up with Google
                                </button>
                             
                            </motion.div>
                            <motion.button initial={initialMotion} animate={finalMotion} transition={{duration : 1.4, delay : 0.4}}
                                    onClick={() => navigate("/")}
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 z-[-10] mt-4"
                                    >
                                        Back To Home Page <FaHome className='ml-2' size={16}/>
                                    </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </div> )
        : 
        (<Loader/>)
    )
}

export default Signup