import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import postReducer from "./post-slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
