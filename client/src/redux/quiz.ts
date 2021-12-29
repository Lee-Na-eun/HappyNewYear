import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QuizIndex {
  index: number;
}

const initialState: QuizIndex = {
  index: 0,
};

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const quizIndexSlice = createSlice({
  name: 'QuizIndex',
  initialState,
  reducers: {
    nextIndex: (state: QuizIndex, action: PayloadAction<QuizIndex>) => {
      action.payload.index = state.index++;
    },
  },
});

export const { nextIndex } = quizIndexSlice.actions;
export const QuizIndexStatus = (state: QuizIndex) => state.index; // ??
export default quizIndexSlice.reducer;
