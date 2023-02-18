import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isRegistration: false,
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload;
      state.isRegistration = true;
    },
    
  },
});

export const registrationAction = registrationSlice.actions;


