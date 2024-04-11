import { toast } from "react-hot-toast";
import { setLoading } from "../../slices/authSlice";
import { authEndpoints } from '../apis';
import { apiConnector } from "../apiconnector";
import { setToken, setSignupData } from "../../slices/authSlice";


const {SIGNUP_API,LOGIN_API,SENDOTP} = authEndpoints;

export function signUp(
    firstName,
    lastName,
    email,
    password,
    role,
    otp,
    navigate
  ) {
    return async (dispatch) => {
      dispatch(setLoading(true))
      try {

        const response = await apiConnector("POST", SIGNUP_API, {
            firstName,
            lastName,
            email,
            password,
            role,
            otp
        })
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (response.status != 200) {
          throw new Error(response.data.message)
        }

        toast.success("Signup Successful")
        navigate("/login");
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("Signup Failed")
        navigate("/signup")
      }
      dispatch(setLoading(false))
    }
}

export function login(
    email,
    password,
    confirmPassword
) {
    return async(dispatch) => {
      dispatch(setLoading(true));
      try{
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
          confirmPassword
        });

        if (response.status != 200) {
          throw new Error(response.data.message)
        }
        
        console.log(response);
        dispatch(setToken(response.data.token));
        localStorage.setItem('token',JSON.stringify(response.data.token));

        toast.success("Login Successful");
      } catch(error){
        console.log("Login API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false));
    }
}

export function sendOtp(
  email,
  navigate
){
  return async (dispatch) => {
    dispatch(setLoading(true));
    try{
      const response = await apiConnector("POST",SENDOTP,{email});
      
      if (response.status != 200) {
        throw new Error(response.data.message)
      }

      console.log("SENDOTP API RESPONSE............", response)
      toast.success("Email Verification");
      
      navigate('/verifyemail')

    } catch(error){
      console.log("SENDOTP API ERROR............", error)
      toast.error("Signup Failed")
      navigate("/signup")
    }
    dispatch(setLoading(false));
  }
}