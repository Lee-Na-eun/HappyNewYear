import { createSlice } from '@reduxjs/toolkit';

export type IsModalOpen = {
  open: boolean;
};

const initialState: IsModalOpen = {
  open: false,
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
  },
});

export const { modalOpen, modalClose } = modalOpenSlice.actions;
export default modalOpenSlice.reducer;
