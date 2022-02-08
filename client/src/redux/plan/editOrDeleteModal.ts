import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type IsEditOrDeleteModal = {
  isEditOpen: boolean;
  isDeleteOpen: boolean;
  planId: string;
};

type FindPlanIdType = {
  isEditOrDeleteModal: IsEditOrDeleteModal;
};

const initialState: IsEditOrDeleteModal = {
  isEditOpen: false,
  isDeleteOpen: false,
  planId: '',
};

export const modalOpenSlice = createSlice({
  name: 'EditOrDeleteModal',
  initialState,
  reducers: {
    editModalOpen: (
      state: IsEditOrDeleteModal,
      action: PayloadAction<string>
    ) => {
      state.isEditOpen = true;
      state.planId = action.payload;
    },
    editModalClose: (state: IsEditOrDeleteModal) => {
      state.isEditOpen = false;
    },
    deleteModalOpen: (
      state: IsEditOrDeleteModal,
      action: PayloadAction<string>
    ) => {
      state.isDeleteOpen = true;
      state.planId = action.payload;
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
export const editPlanIdStatus = (state: FindPlanIdType) =>
  state.isEditOrDeleteModal.planId;
