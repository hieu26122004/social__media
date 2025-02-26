import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "@/types/post";

type PostState = {
  posts: Post[];
};

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
