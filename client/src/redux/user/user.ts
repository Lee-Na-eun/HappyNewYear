import { createSlice } from '@reduxjs/toolkit';

export type UserType = {
  id: number;
  userId: string;
  accessToken: null;
};

const initialState: UserType = {
  id: -1,
  userId: '',
  accessToken: null,
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id;
      state.userId = action.payload.userId;
    },
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
      console.log(
        'updateAccessToken dispatch안에서 찍은 업뎃 한 후 accessToken: ',
        state.accessToken
      );
    },
    logout: (state) => {
      state.id = -1;
      state.userId = '';
      state.accessToken = null;
    },
  },
});
