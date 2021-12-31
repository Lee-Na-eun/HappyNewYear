import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type OptionArr = {
  selectOptionArr: Array<number>;
};

export type Idx = {
  idx: number;
};

const initialState: OptionArr = {
  selectOptionArr: [0, 0, 0, 0, 0],
};

export const optionArrSlice = createSlice({
  name: 'OptionArrSlice',
  initialState,
  reducers: {
    resultArr: (state: OptionArr, action: PayloadAction<Idx>) => {
      const idx: number = action.payload.idx;
      state.selectOptionArr[idx] += 1;
    },
  },
});

export const { resultArr } = optionArrSlice.actions;
export const resultStatus = (state: any) => state;
export default optionArrSlice.reducer;
