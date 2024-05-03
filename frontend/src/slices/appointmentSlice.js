import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointmentsFee: {},
  appointmentTimeing: {},
  loading: false,
};


const appointmentSlice = createSlice({
    name: "appointment",
    initialState: initialState,
    reducers: {
      setAppointmentsFee(state, action) {
        state.appointmentsFee = action.payload;
      },
      setAppointmentTimeing(state, action) {
        state.appointmentTimeing = action.payload;
      },
      setLoading(state, action) {
        state.loading = action.payload;
      },
    },
});

export const { setAppointmentTimeing, setLoading, setAppointmentsFee } = appointmentSlice.actions;

export default appointmentSlice.reducer;