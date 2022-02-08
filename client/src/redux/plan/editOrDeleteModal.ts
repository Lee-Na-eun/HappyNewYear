import { createSlice } from '@reduxjs/toolkit';

export type IsEditOrDeleteModal = {
  open: boolean;
};

const initialState: IsEditOrDeleteModal = {
  open: false,
};

export const modalOpenSlice = createSlice({
  name: 'EditOrDeleteModal',
  initialState,
  reducers: {
    EditOrDeleteModalOpen: (state: IsEditOrDeleteModal) => {
      state.open = true;
    },
    EditOrDeleteModalClose: (state: IsEditOrDeleteModal) => {
      state.open = false;
    },
  },
});

export const { EditOrDeleteModalOpen, EditOrDeleteModalClose } =
  modalOpenSlice.actions;
export default modalOpenSlice.reducer;
