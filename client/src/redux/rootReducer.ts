import { combineReducers } from 'redux';
import quizIndexReducer from './quiz/quiz';
import resultOptionReducer from './quiz/result';
import isNavOpenReducer from './nav/nav';
import isModalOpenReducer from './nav/loginSignup';

const reducer = combineReducers({
  quizIndex: quizIndexReducer,
  resultOption: resultOptionReducer,
  isNavOpen: isNavOpenReducer,
  isModalOpen: isModalOpenReducer,
});

// React에서 사용할 수 있도록 타입을 만들어 export 해준다.
export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
