import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Textarea } from "@material-tailwind/react";
import axios from 'axios';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


const PatientCall = () => {

  const { patientname, doctorname, type } = useParams()

  const navigate = useNavigate();

  const [value, setValue] = React.useState(2.5);
  const [hover, setHover] = React.useState(-1);

  const [feedback , setFeedback] = React.useState("");

  function submitRating(){
    console.log(value);
    console.log(feedback);

    axios.post('http://localhost:8081/api/v1/review/create', {
      patientId: patientname.split('-')[1],
      doctorId: doctorname.split('-')[1],
      rating: value,
      comment: feedback
    })
    .then(response => {
        console.log('Review submitted successfully:', response.data);
    })
    .catch(error => {
        console.error('Error submitting review:', error);
    });

    setFeedback("");
  }

  const myMeeting = async (element) => {
    const roomID = patientname + doctorname;
    const userID = Math.floor(Math.random() * 10000) + "";
    const userName = type == "doc" ? doctorname : patientname;
    const appID = 1384980360;
    const serverSecret = "1fe840ebf181de4225d47356adb2fe84";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userID,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    try {
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "Copy Link",
            url: `http://localhost:5173/call/${doctorname}/${patientname}/pat`,
          },

        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    } catch (error) {
      console.error("Error joining room:", error);
    }
  }


  return (
    <div className='h-[100vh] w-full flex justify-center items-center relative'>

      <button className='absolute lg:top-[85vh] top-[55vh] lg:left-[43vw]  rounded-md bg-[#0055FE] px-[4.5vw] py-2 text-md font-semibold text-white shadow-sm hover:bg-[#2D71FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ' onClick={() => navigate(-1)}>Go Back</button>

      {
        type == "pat" ?
          (
            <div className='absolute top-0 left-[40vw]'>
              <div className='absolute top-[67.5vh] -left-[23vw] bg-[#0055FE] justify-center items-center font-mono py-2 px-4 rounded-md'>
                <Box
                  sx={{
                    width: 250,
                    display: 'flex',
                    alignItems: 'center',
                    gap: "1.5vw"
                  }}
                >
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}

                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}

                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}

                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="medium" />}
                    icon={<StarIcon style={{ opacity: 1 }} fontSize="medium" />}
                  />

                  {value !== null && (
                    <Box sx={{ ml: 2, color: "white", fontSize: "2vh" }}>{labels[hover !== -1 ? hover : value]}</Box>
                  )}
                </Box>
              </div>

              <div className="absolute top-[65vh] flex w-72 flex-col gap-6">
                <Textarea color='blue' label="please give your doctor a feedback" onChange={(e) => {setFeedback(e.target.value)}}/>
              </div>

              <button className='absolute w-[20vw] lg:top-[67.5vh] top-[55vh] left-[23vw]  rounded-xl bg-[#0055FE] px-[4.5vw] py-2 text-md font-semibold text-white shadow-sm hover:bg-[#2D71FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ' onClick={submitRating}>
              Submit feedback
            </button>
            </div>
          )
          :
          (
            <div className='absolute top-0 left-0'>
              <button className='absolute w-[20vw] lg:top-[65vh] top-[55vh] lg:left-[40vw]  rounded-xl bg-[#0055FE] px-[4.5vw] py-2 text-md font-semibold text-white shadow-sm hover:bg-[#2D71FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ' onClick={() => navigate(`/report/write/${patientname}`)}>
                Write Patient Report
              </button>
            </div>
          )
      }



      <div className='h-full w-full' ref={myMeeting} />
    </div>
  )
}

export default PatientCall