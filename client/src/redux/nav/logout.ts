import { createSlice } from '@reduxjs/toolkit';

export type IsLogoutModal = {
  open: boolean;
};

const initialState: IsLogoutModal = {
  open: false,
};

export const modalOpenSlice = createSlice({
  name: 'LogoutModal',
  initialState,
  reducers: {
    logoutModalOpen: (state: IsLogoutModal) => {
      state.open = true;
    },
    logoutModalClose: (state: IsLogoutModal) => {
      state.open = false;
    },
  },
});

export const { logoutModalOpen, logoutModalClose } = modalOpenSlice.actions;
export default modalOpenSlice.reducer;
