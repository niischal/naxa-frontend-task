import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    isLoading: false,
  },
  reducers: {
    getServicesFetch: (state) => {
      state.isLoading = true;
    },
    getServicesSuccess: (state, action) => {
      state.services = action.payload;
      state.isLoading = false;
    },
    getServiceFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getServicesFetch, getServicesSuccess, getServiceFailure } =
  serviceSlice.actions;

export default serviceSlice.reducer;
