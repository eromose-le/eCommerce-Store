import { createSlice } from '@reduxjs/toolkit';

const refSlice = createSlice({
  name: 'ref',
  initialState: {
    blogRef: null,
    isFetching: false,
    error: false
  },
  reducers: {
    // GET ALL
    getBlogRefSuccess: (state, action) => {
      state.isFetching = false;
      state.blogRef = action.payload;
    }
  }
});

export const { getBlogRefSuccess } = refSlice.actions;
export default refSlice.reducer;
