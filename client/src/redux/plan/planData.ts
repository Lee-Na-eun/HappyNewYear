import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PlanType = {
  month: number;
  date: number;
};

interface PlanProperty {
  [key: string]: {
    month: number;
    date: number;
    accessToken: string;
  };
}

const initialState: PlanType = {
  month: 1,
  date: 1,
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
  },
});

export const { monthChange, dateChange } = PlanTypeSlice.actions;
export const planTypeStatus = (state: PlanProperty) => state;
export default PlanTypeSlice.reducer;
