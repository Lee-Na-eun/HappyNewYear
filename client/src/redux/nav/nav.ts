import { createSlice } from '@reduxjs/toolkit';

export type IsNavOpen = {
  open: boolean;
};

const initialState: IsNavOpen = {
  open: false,
};

export const navOpenSlice = createSlice({
  name: 'NavOpen',
  initialState,
  reducers: {
    navOpen: (state: IsNavOpen) => {
      state.open = true;
    },
    navClose: (state: IsNavOpen) => {
      state.open = false;
    },
  },
});

export const { navOpen, navClose } = navOpenSlice.actions;
export default navOpenSlice.reducer;
