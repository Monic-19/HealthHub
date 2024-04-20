import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import {Card,CardHeader,Input,Typography,Button,CardBody,Chip,CardFooter,Tabs,TabsHeader,Tab,Avatar,} from "@material-tailwind/react";

const PatientAppointments = () => {
  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Online",
      value: "online",
    },
    {
      label: "Offline",
      value: "offline",
    },
  ];

  const TABLE_HEAD = ["Member", "Type", "Date"];

  const TABLE_ROWS = [
    {
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Doctor Ram Lal",
      online: true,
      date: "23/04/18",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Doctor Bhajan Lal",
      online: false,
      date: "23/04/18",
    },
    {
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Doctor Lucifer",
      online: false,
      date: "19/09/17",
    },
    {
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Doctor Ram Mohan",
      online: true,
      date: "24/12/08",
    },
    {
      img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww",
      name: "Doctor Raja Mohan",
      online: false,
      date: "04/10/21",
    },
   
    
  ];

  const [selectedTab, setSelectedTab] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortedResults, setSortedResults] = React.useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleTabSelect = (value) => {
    setSelectedTab(value);
  };

  React.useEffect(() => {
    let filteredResults = TABLE_ROWS;
  
    if (searchTerm) {
      filteredResults = filteredResults.filter((row) =>
        row.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    if (selectedTab === "online") {
      filteredResults = filteredResults.filter((row) => row.online);
    } else if (selectedTab === "offline") {
      filteredResults = filteredResults.filter((row) => !row.online);
    }
  
    setSortedResults(filteredResults);
  }, [selectedTab, searchTerm]);

  return (
    <div>
      <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none ">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
                <Tabs value="all" className="w-full md:w-max">
                  <TabsHeader>
                    {TABS.map(({ label, value }) => (
                      <Tab key={value}   
                      onClick={() => handleTabSelect(value)}
                      value={value} className='lg:w-[12vw] w-[33%]'>
                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                      </Tab>
                    ))}
                  </TabsHeader>
                </Tabs>
                <div className="w-full md:w-72">
                  <Input
                    label="Search"
                    icon={<FaSearch className="h-5 w-5" />}
                    value={searchTerm}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
              <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedResults.map(
                    ({ img, name, email, job, org, online, date }, index) => {
                      const isLast = index === sortedResults.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={name}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Avatar src={img} alt={name} size="sm" />
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {name}
                                </Typography>
                        
                              </div>
                            </div>
                          </td>

                          <td className={classes}>
                            <div className="w-max">
                              <Chip
                                variant="ghost"
                                size="sm"
                                value={online ? "online" : "offline"}
                                color={online ? "green" : "blue-gray"}
                              />
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {date}
                            </Typography>
                          </td>
                        </tr>
                      );
                    },
                  )}
                </tbody>
              </table>
            </CardBody>
            {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
                Page 1 of 10
              </Typography>
              <div className="flex gap-2">
                <Button variant="outlined" size="sm">
                  Previous
                </Button>
                <Button variant="outlined" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter> */}
          </Card>
    </div>

  )
}

export default PatientAppointments