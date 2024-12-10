import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.open = true;
      state.message = action.payload;
    },
    hideToast: (state) => {
      state.open = false;
      state.message = "";
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;

export default toastSlice.reducer;
