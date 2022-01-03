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
  },
});

export const { navOpen } = navOpenSlice.actions;
export const navBooleanStatus = (state: any) => state;
export default navOpenSlice.reducer;
