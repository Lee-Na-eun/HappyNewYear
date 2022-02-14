import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FindPlanType = {
  findPlan: object;
};

const initialState: FindPlanType = {
  findPlan: [],
};

export type FindPlanProperty = {
  id: string;
  date: string;
  planText: string;
  workingStatus: string;
};

type FindPlanArray = {
  findPlan: { findPlan: FindPlanProperty[] };
};

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const findPlanReducer = createSlice({
  name: 'FindPlanType',
  initialState,
  reducers: {
    savePlanData: (
      state: FindPlanType,
      action: PayloadAction<FindPlanType>
    ) => {
      state.findPlan = action.payload;
    },
  },
});

export const { savePlanData } = findPlanReducer.actions;
export const findPlanTypeStatus = (state: FindPlanArray) =>
  state.findPlan.findPlan;
export default findPlanReducer.reducer;
