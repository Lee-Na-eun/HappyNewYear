import { createSlice } from '@reduxjs/toolkit';

export type IsEditOrDeleteModal = {
  isEditOpen: boolean;
  isDeleteOpen: boolean;
};

const initialState: IsEditOrDeleteModal = {
  isEditOpen: false,
  isDeleteOpen: false,
};

export const modalOpenSlice = createSlice({
  name: 'EditOrDeleteModal',
  initialState,
  reducers: {
    editModalOpen: (state: IsEditOrDeleteModal) => {
      state.isEditOpen = true;
    },
    editModalClose: (state: IsEditOrDeleteModal) => {
      state.isEditOpen = false;
    },
    deleteModalOpen: (state: IsEditOrDeleteModal) => {
      state.isDeleteOpen = true;
    },
    deleteModalClose: (state: IsEditOrDeleteModal) => {
      state.isDeleteOpen = false;
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
