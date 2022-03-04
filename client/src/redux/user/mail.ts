import { createSlice } from '@reduxjs/toolkit';

export type MailOpenType = {
  isOpen: boolean;
};

// export type AccessType = {
//   accessToken: null;
// };

const initialState: MailOpenType = {
  isOpen: false,
};

export const myRoomSlice = createSlice({
  name: 'myRoom',
  initialState,
  reducers: {
    open: (state: MailOpenType) => {
      state.isOpen = true;
    },
    close: (state: MailOpenType) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = myRoomSlice.actions;
export default myRoomSlice.reducer;
