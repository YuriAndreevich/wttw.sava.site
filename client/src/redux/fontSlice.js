// src/store/fontSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  textFontSize: 1,  
  titleFontSize: 1.25, 
};

const fontSlice = createSlice({
  name: 'font',
  initialState,
  reducers: {
    increaseFont: (state) => {
      if (state.textFontSize < 2 && state.titleFontSize < 2.25) {
        state.textFontSize += 0.25; 
        state.titleFontSize += 0.25; 
      }
    },
    decreaseFont: (state) => {
      if (state.textFontSize > 1 && state.titleFontSize > 1.25) {
        state.textFontSize -= 0.25; 
        state.titleFontSize -= 0.25; 
      }
    },
  },
});

export const { increaseFont, decreaseFont } = fontSlice.actions;

export default fontSlice.reducer;
