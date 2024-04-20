import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { FaHome } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../services/Operations/authAPI';
import { useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const initialMotion = {y: 40, sacle : 0, opacity : 0};
    const finalMotion = {y : 0, scale : 1,opacity : 1};
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(login(data.email,data.password,navigate));
    }
    return (
        <div className='h-[100vh] w-full flex justify-center items-center'>
            <section>
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <motion.h1 initial={{scale : 0}} animate ={{scale : 1}} transition ={{duration : 0.5}} className=' leading-[10vh] text-[10vh] text-center lg:text-[15vh] lg:leading-[15vh] tracking-[-2vw] mr-4 font-extrabold  font-mono '>HH</motion.h1>
                        <div className="mb-2 flex justify-center">
                            <motion.h1 
                            initial={initialMotion} animate={finalMotion} transition={{duration : 0.3}} className="italic text-center text-3xl font-bold mb-2 text-black">Welcome to Health Hub</motion.h1>
                        </div>
                        <motion.h2 initial={initialMotion} animate={finalMotion} transition={{duration : 0.4}} className="text-center text-2xl leading-tight text-black">
                            Log in to your account
                        </motion.h2>
                        <motion.p initial={initialMotion} animate={finalMotion} transition={{duration : 0.5}} className="mt-2 text-center text-sm text-gray-600 ">
                            Don&apos;t have an account?{' '}
                            <Link
                                to="/signup"
                                className="font-semibold text-black transition-all duration-200 hover:underline"
                            >
                                Create a free account
                            </Link>
                        </motion.p>
                        <form onSubmit={handleSubmit(onSubmit)} method="POST" className="mt-8">
                            <div className="space-y-5">
                                <motion.div initial={initialMotion} animate={finalMotion} transition={{duration : 0.6}} >
                                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Email address{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            placeholder="Email"
                                            id='email'
                                            {...register("email", { required: true })}
                                        ></input>
                                    </div>
                                </motion.div>
                                <div>
                                    <motion.div initial={initialMotion} animate={finalMotion} transition={{duration : 0.7}} className="flex items-center justify-between">
                                        <label htmlFor="password" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Password{' '}
                                        </label>
                                        <a href="#" title="" className="text-sm font-semibold text-black hover:underline">
                                            {' '}
                                            Forgot password?{' '}
                                        </a>
                                    </motion.div>

                                    <motion.div initial={initialMotion} animate={finalMotion} transition={{duration : 0.8}} className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Password"
                                            id='password'
                                            {...register("password", { required: true })}
                                        ></input>
                                    </motion.div>
                                </div>
                                <div>
                                    <motion.button initial={initialMotion} animate={finalMotion} transition={{duration : 0.9}}
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    >
                                        Get started <FaArrowRightLong className="ml-2" size={16} />
                                    </motion.button>
                                </div>
                            
                            </div>
                        </form>
                        <div className="mt-3 space-y-3">
                            <motion.button initial={initialMotion} animate={finalMotion} transition={{duration : 0.9}}
                                type="button"
                                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none z-10"
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
                                Sign in with Google
                            </motion.button>

                            <div>
                                    <motion.button initial={initialMotion} animate={finalMotion} transition={{duration : 1.4, delay : 0.4}}
                                    onClick={() => navigate("/")}
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 z-[-10]"
                                    >
                                        Back To Home Page <FaHome className='ml-2' size={16}/>
                                    </motion.button>
                                </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login