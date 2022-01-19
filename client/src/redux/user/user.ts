import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    login: (state: UserType, action: PayloadAction<UserType>) => {
      state.id = action.payload.id;
      state.userId = action.payload.userId;
      state.accessToken = action.payload.accessToken;
    },
    updateAccessToken: (state: UserType, action) => {
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

export const { login, updateAccessToken, logout } = userInfoSlice.actions;
export const userInfoStatus = (state: any) => state.userInfo;
export default userInfoSlice.reducer;
