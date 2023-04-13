import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
type state = {
  user: string | null;
};

const initialState: state = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export const { actions } = userSlice;
export const user = (state: RootState) => state.user;
export const userReducer = userSlice.reducer;
