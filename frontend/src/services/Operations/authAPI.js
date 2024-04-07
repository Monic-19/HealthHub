import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../../slices/authSlice";
import { authEndpoints } from '../apis';
import { apiConnector } from "../apiconnector"
import { setUser } from "../../slices/profileSlice";

const {SIGNUP_API,LOGIN_API} = authEndpoints;

export function signUp(
    firstName,
    lastName,
    email,
    password,
    phoneNo,
    address,
    gender,
    bloodGroup,
    document,
    role
  ) {
    return async (dispatch) => {
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", SIGNUP_API, {
            firstName,
            lastName,
            email,
            password,
            phoneNo,
            address,
            gender,
            bloodGroup,
            document,
            role
        })
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }

        toast.success("Signup Successful")
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("Signup Failed")
        navigate("/signup")
      }
      dispatch(setLoading(false))
    }
}

export function Login(
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

        console.log("SIGNUP API RESPONSE............", response)

        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Login Successful")
      } catch(error){
        console.log("SIGNUP API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false));
    }
}