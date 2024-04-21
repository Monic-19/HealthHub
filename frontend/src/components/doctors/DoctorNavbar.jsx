import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavList() {
  return (
    <>
      <Tabs value="df">
        <TabsHeader className="lg:w-[50vw] w-full">

          
            <NavLink to={"/doctor/profile"} className="flex items-center hover:text-black hover:font-bold transition-colors w-[25vw] lg:w-[12vw]">
            <Tab value={"Profile"}>Profile</Tab>
            </NavLink>
          

          
            <NavLink to={"/doctor/info"} className="flex items-center hover:text-black hover:font-bold transition-colors w-[25vw] lg:w-[12vw]">
            <Tab value={"Information"}>Information </Tab>
            </NavLink>
         

          
            <NavLink to={"/doctor/appointments"} className="flex items-center hover:text-black hover:font-bold transition-colors w-[25vw] lg:w-[12vw]">
            <Tab value={"Appointments"}>Appointments</Tab>
            </NavLink>
          

          
            <NavLink to={"/doctor/stats"} className="flex items-center hover:text-black hover:font-bold  transition-colors w-[25vw] lg:w-[12vw]">
            <Tab value={"Stats"}>Stats</Tab>
            </NavLink>
          
        </TabsHeader>
      </Tabs>
    </>
  );
}

const DoctorNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const user = useSelector((state) => state.profile.user);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [doctorName, setDoctorName] = useState(`${user.firstName} ${user.lastName}`)

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <NavLink to={"/doctor"}>Dr. {doctorName}</NavLink>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <RxCross1 className="h-6 w-6" strokeWidth={2} />
          ) : (
            <FaBars className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default DoctorNavbar;