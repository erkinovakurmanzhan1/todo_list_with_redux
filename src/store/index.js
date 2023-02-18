import { configureStore } from "@reduxjs/toolkit";
import { registrationSlice } from "./authSlice/authSlice";
import { todoSlice } from "./todoSlice/todoSlice";

export const store = configureStore({
  reducer: {
    registration: registrationSlice.reducer,
    todo: todoSlice.reducer,
  },
});
