import React, { useState } from "react";
import { Card, Typography, Input, Checkbox, Button, useSelect, } from "@material-tailwind/react";
import { motion } from "framer-motion"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveClinicInformation } from "../../services/Operations/personal_InformationAPI";


const DoctorClinicInfo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.profile.user);
    const onClickSubmit = (data) => {
      // console.log(user.id,data);
      dispatch(saveClinicInformation(user.id,data));
    }

  return (
    
    <div

      className='h-[70vh] w-[100%] '>
      <h1 className='text-3xl p-5 font-mono h-[10vh] bg-gray-900 text-white'>Your Clinic's Information</h1>

      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" h-[67vh] w-[100%] flex justify-center">
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 overflow-y-scroll lg:pb-[0vh] pb-[10vh] docInputForm flex-grow" onSubmit={handleSubmit(onClickSubmit)}>
          <div className="mb-1 flex flex-col gap-4">


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Clinic Name
            </Typography>
            <Input
              size="lg"
              placeholder="clinic name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Pincode
            </Typography>
            <Input
              type="number"
              size="lg"
              placeholder="Pincode"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("pincode", { required: true })}
            />
            {errors.pincode && <span>This field is required</span>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Building/House no./Flat/Other
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="building"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("building", { required: true })}
            />
            {errors.building && <span>This field is required</span>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Area
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="area"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("area", { required: true })}
            />
            {errors.area && <span>This field is required</span>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Landmark
            </Typography>
            <Input
              type='text'
              size="lg"
              placeholder="landmark"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("landmark")}
            />
            {errors.landmark && <span>This field is required</span>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Town City
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="towncity"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("townCity")}
            />
            {errors.townCity && <span>This field is required</span>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              State
            </Typography>
            <Input
              type='text'
              size="lg"
              placeholder="state"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("state")}
            />
            {errors.state && <span>This field is required</span>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Clinic Picture
            </Typography>
            <Input
              type="file"
              size="lg"
              {...register("clinicPicture")}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Fees per visit
            </Typography>
            <Input
              size="lg"
              placeholder="Rs. 500"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("fee", { required: true })}
            />
            {errors.fee && <span>This field is required</span>}


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Opening Time
            </Typography>
            <Input
              type="time"
              size="lg"
              placeholder="Opening Time"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("openingTime", { required: true })}
            />
            {errors.openingTime && <span>This field is required</span>}
            

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Closing Time
            </Typography>
            <Input
              type="time"
              size="lg"
              placeholder="Closing Time"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("closingTime", { required: true })}
            />
            {errors.closingTime && <span>This field is required</span>}

          </div>


          <Button type="submit" className="mt-6" fullWidth>
            Submit
          </Button>

        </form>
      </motion.div >

    </div >
  )
}

export default DoctorClinicInfo;