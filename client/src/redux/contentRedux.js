import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    contents: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getContentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getContentSuccess: (state, action) => {
      state.isFetching = false;
      state.contents = action.payload;
    },
    getContentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //UPDATE
    updateContentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateContentSuccess: (state, action) => {
      state.isFetching = false;
      state.contents[
        state.contents.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.content;
      console.log(action.payload.content);
    },
    updateContentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addContentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addContentSuccess: (state, action) => {
      state.isFetching = false;
      state.contents.push(action.payload);
    },
    addContentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getContentStart,
  getContentSuccess,
  getContentFailure,
  updateContentStart,
  updateContentSuccess,
  updateContentFailure,
  addContentStart,
  addContentSuccess,
  addContentFailure,
} = contentSlice.actions;

export default contentSlice.reducer;
