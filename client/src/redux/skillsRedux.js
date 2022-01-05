import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
  name: "skill",
  initialState: {
    skills: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getSkillStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSkillSuccess: (state, action) => {
      state.isFetching = true;
      state.skills = action.payload;
    },
    getSkillFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteSkillStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteSkillSuccess: (state, action) => {
      state.isFetching = true;
      state.skills.filter((skill) => skill._id !== action.payload._id);
    },
    deleteSkillFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    resetSkillStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    resetSkillSuccess: (state) => {
      state.isFetching = true;
      state.skills = [];
    },
    resetSkillFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addSkillStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addSkillSuccess: (state, action) => {
      state.isFetching = false;
      state.skills.push(action.payload);
    },
    addSkillFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateSkillStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateSkillSuccess: (state, action) => {
      state.isFetching = false;
      state.skills[
        state.skills.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.skill;
    },
    updateSkillFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getSkillStart,
  getSkillSuccess,
  getSkillFailure,
  deleteSkillStart,
  deleteSkillSuccess,
  deleteSkillFailure,
  resetSkillStart,
  resetSkillSuccess,
  resetSkillFailure,
  addSkillStart,
  addSkillSuccess,
  addSkillFailure,
  updateSkillStart,
  updateSkillSuccess,
  updateSkillFailure,
} = skillSlice.actions;
export default skillSlice.reducer;
