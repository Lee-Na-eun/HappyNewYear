import { createSlice } from '@reduxjs/toolkit';

export type IsModalOpen = {
  open: boolean;
  login: boolean;
};

const initialState: IsModalOpen = {
  open: false,
  login: false,
};

export const modalOpenSlice = createSlice({
  name: 'ModalOpen',
  initialState,
  reducers: {
    modalOpen: (state: IsModalOpen) => {
      state.open = true;
    },
    modalClose: (state: IsModalOpen) => {
      state.open = false;
    },
    loginDone: (state: IsModalOpen) => {
      state.login = true;
    },
    loginNot: (state: IsModalOpen) => {
      state.login = false;
    },
  },
});

export const { modalOpen, modalClose, loginDone, loginNot } =
  modalOpenSlice.actions;
export default modalOpenSlice.reducer;
