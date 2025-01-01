import { createSlice } from "@reduxjs/toolkit";

const openingSlice = createSlice({
  name: "opening",
  initialState: {
    isOpen: false, 
  },
  reducers: {
    // openingstate: (state, action: PayloadAction<boolean>) => {
    //   state.isOpen = action.payload;
    // },
    toggleOpening: (state) => {
        state.isOpen = !state.isOpen;
      },
  },
});

export const { toggleOpening } = openingSlice.actions;
export default openingSlice.reducer;