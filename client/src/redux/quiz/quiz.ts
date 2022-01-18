import { createSlice } from '@reduxjs/toolkit';

export type QuizIndex = {
  index: number;
  // resetIndex: number;
};

interface QuizProperty {
  [key: string]: { index: number };
}

const initialState: QuizIndex = {
  index: 0,
  // resetIndex: 0,
};

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const quizIndexSlice = createSlice({
  name: 'QuizIndex',
  initialState,
  reducers: {
    nextIndex: (state: QuizIndex) => {
      state.index += 1;
    },
    resetIndex: (state: QuizIndex) => {
      state.index = 0;
    },
  },
});

export const { nextIndex, resetIndex } = quizIndexSlice.actions;
export const QuizIndexStatus = (state: QuizProperty) => state.quizIndex;
export default quizIndexSlice.reducer;
