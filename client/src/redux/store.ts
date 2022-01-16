import { configureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;
