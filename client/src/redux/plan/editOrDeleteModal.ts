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
    editModalOpen: (state: IsEditOrDeleteModal) => {
      state.open = true;
    },
    editModalClose: (state: IsEditOrDeleteModal) => {
      state.open = false;
    },
    deleteModalOpen: (state: IsEditOrDeleteModal) => {
      state.open = true;
    },
    deleteModalClose: (state: IsEditOrDeleteModal) => {
      state.open = false;
    },
  },
});

export const {
  editModalOpen,
  editModalClose,
  deleteModalOpen,
  deleteModalClose,
} = modalOpenSlice.actions;
export default modalOpenSlice.reducer;
