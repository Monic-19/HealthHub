const BASE_URL = 'http://localhost:8081/api/v1';

export const authEndpoints = {
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    SENDOTP: BASE_URL + "/auth/sendotp",
}

export const appointmentEndpoints = {
    CREATE_APPOINTMENT: BASE_URL + "/appointments/create",
    REMOVE_APPOINTMENT: BASE_URL + "/appointments",
    GET_APPOINTMENTS_BOOKED_BY_PATIENT: BASE_URL + "/appointments/patient",
    GET_APPOINTMENTS_BOOKED_FOR_DOCTOR: BASE_URL + "/appointments/doctor",
}

export const InformationEndpoints = {
    SAVE_DOCTOR_INFORMATION:BASE_URL + "/personal-info/doctor",
    SAVE_PATIENT_INFORMATION:BASE_URL + "/personal-info/patient",
    GET_DOCTOR_INFORMATION:BASE_URL + "/personal-info/doctor",
    GET_PATIENT_INFORMATION:BASE_URL + "/personal-info/patient",
}