import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarHidden: false, 
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarHidden = !state.isSidebarHidden; 
    },
    hideSidebar: (state) => {
      state.isSidebarHidden = true; 
    },
    showSidebar: (state) => {
      state.isSidebarHidden = false; 
    },
  },
});

export const { toggleSidebar, hideSidebar, showSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
