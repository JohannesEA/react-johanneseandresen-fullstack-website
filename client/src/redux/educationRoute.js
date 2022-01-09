import { createSlice } from "@reduxjs/toolkit";

export const educationSlice = createSlice({
  name: "education",
  initialState: {
    educations: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getEducationStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getEducationSuccess: (state, action) => {
      state.isFetching = false;
      state.educations = action.payload;
    },
    getEducationFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //UPDATE
    updateEducationStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateEducationSuccess: (state, action) => {
      state.isFetching = false;
      state.educations[
        state.educations.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.education;
      console.log(action.payload.education);
    },
    updateEducationFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addEducationStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addEducationSuccess: (state, action) => {
      state.isFetching = false;
      state.educations.push(action.payload);
    },
    addEducationFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getEducationStart,
  getEducationSuccess,
  getEducationFailure,
  updateEducationStart,
  updateEducationSuccess,
  updateEducationFailure,
  addEducationStart,
  addEducationSuccess,
  addEducationFail,
} = educationSlice.actions;

export default educationSlice.reducer;
