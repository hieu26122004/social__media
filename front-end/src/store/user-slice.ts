import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/user";

type UserState = {
  user: User | null;
};

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { clearUser, setUser } = userSlice.actions;

export default userSlice.reducer;
