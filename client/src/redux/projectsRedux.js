import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getProjectStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProjectSuccess: (state, action) => {
      state.isFetching = true;
      state.projects = action.payload;
    },
    getProjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteProjectStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProjectSuccess: (state, action) => {
      state.isFetching = true;
      state.projects.filter((project) => project._id !== action.payload._id);
    },
    deleteProjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    resetProjectStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    resetProjectSuccess: (state) => {
      state.isFetching = true;
      state.projects = [];
    },
    resetProjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addProjectStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProjectSuccess: (state, action) => {
      state.isFetching = false;
      state.projects.push(action.payload);
    },
    addProjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateProjectStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProjectSuccess: (state, action) => {
      state.isFetching = false;
      state.projects[
        state.projects.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.project;
    },
    updateProjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProjectStart,
  getProjectSuccess,
  getProjectFailure,
  deleteProjectStart,
  deleteProjectSuccess,
  deleteProjectFailure,
  resetProjectStart,
  resetProjectSuccess,
  resetProjectFailure,
  addProjectStart,
  addProjectSuccess,
  addProjectFailure,
  updateProjectStart,
  updateProjectSuccess,
  updateProjectFailure,
} = projectSlice.actions;

export default projectSlice.reducer;
