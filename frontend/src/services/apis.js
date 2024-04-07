const BASE_URL = 'http://localhost:8000/api/v1';

export const authEndpoints = {
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
}

export const appointmentEndpoints = {
    CREATE_APPOINTMENT: BASE_URL + "/appointments/create",
    REMOVE_APPOINTMENT: BASE_URL + "/appointments",
    GET_APPOINTMENTS_BOOKED_BY_PATIENT: BASE_URL + "/appointments/patient",
    GET_APPOINTMENTS_BOOKED_FOR_DOCTOR: BASE_URL + "/appointments/doctor",
}