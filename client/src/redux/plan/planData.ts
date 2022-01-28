import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PlanType = {
  month: number;
  date: number;
  planText: string;
  working: string;
};

interface PlanProperty {
  [key: string]: {
    month: number;
    date: number;
    planText: string;
    working: string;
  };
}

const initialState: PlanType = {
  month: 1,
  date: 1,
  planText: '',
  working: '',
};

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const PlanTypeSlice = createSlice({
  name: 'PlanType',
  initialState,
  reducers: {
    monthChange: (state: PlanType, action: PayloadAction<number>) => {
      state.month = action.payload;
    },
    dateChange: (state: PlanType, action: PayloadAction<number>) => {
      state.date = action.payload;
    },
    planTextChange: (state: PlanType, action: PayloadAction<string>) => {
      state.planText = action.payload;
    },
    workingChange: (state: PlanType, action: PayloadAction<string>) => {
      state.working = action.payload;
    },
  },
});

export const { planTextChange, monthChange, dateChange, workingChange } =
  PlanTypeSlice.actions;
export const planTypeStatus = (state: PlanProperty) => state;
export default PlanTypeSlice.reducer;
