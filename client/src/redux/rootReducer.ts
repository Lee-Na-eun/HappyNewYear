import { combineReducers } from 'redux';
import quizIndexReducer from './quiz/quiz';
import resultOptionReducer from './quiz/result';
import isNavOpenReducer from './nav/nav';
import isModalOpenReducer from './nav/loginSignup';
import isLogoutModalOpenReducer from './nav/logoutModal';
import userReducer from './user/user';
import myRoomReducer from './user/mail';
import planDataReducer from './plan/planData';
import findPlanReducer from './plan/findPlan';
import isEditOrDeleteModalReducer from './plan/editOrDeleteModal';

const reducer = combineReducers({
  quizIndex: quizIndexReducer,
  resultOption: resultOptionReducer,
  isNavOpen: isNavOpenReducer,
  isModalOpen: isModalOpenReducer,
  isLogoutModalOpen: isLogoutModalOpenReducer,
  userInfo: userReducer,
  isMailBoxOpen: myRoomReducer,
  planData: planDataReducer,
  findPlan: findPlanReducer,
  isEditOrDeleteModal: isEditOrDeleteModalReducer,
});

// React에서 사용할 수 있도록 타입을 만들어 export 해준다.
export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
