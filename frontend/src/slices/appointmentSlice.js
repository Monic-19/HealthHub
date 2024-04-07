import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appointments: [],
    loading: false,
};


const appointmentSlice = createSlice({
    name: "appointment",
    initialState: initialState,
    reducers: {
      setAppointments(state, value) {
        state.appointments = value.payload;
      },
      setLoading(state, value) {
        state.loading = value.payload;
      },
    },
});

export const { setAppointments, setLoading } = authSlice.actions;

export default appointmentSlice.reducer;