import { publicRequest } from "../requestMethods";
import {
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
} from "./projectsRedux";
import {
  getSkillStart,
  getSkillSuccess,
  getSkillFailure,
  deleteSkillStart,
  deleteSkillSuccess,
  deleteSkillFailure,
  resetSkillStart,
  resetSkillSuccess,
  resetSkillFailure,
  updateSkillStart,
  updateSkillSuccess,
  updateSkillFailure,
  addSkillStart,
  addSkillSuccess,
  addSkillFailure,
} from "./skillsRedux";

export const getSkills = async (dispatch) => {
  getSkillStart(dispatch);
  try {
    const res = await publicRequest.get("api/skills");
    dispatch(getSkillSuccess(res.data));
  } catch (err) {
    dispatch(getSkillFailure());
  }
};

export const deleteSkill = async (id, dispatch) => {
  dispatch(deleteSkillStart());
  try {
    const res = await userRequest.delete(`api/skills/${id}`);
    dispatch(deleteSkillSuccess(res.data));
  } catch (err) {
    dispatch(deleteSkillFailure());
  }
};

export const updateSkill = async (id, skill, dispatch) => {
  dispatch(updateSkillStart());
  try {
    // updateconst res = await userRequest.put(`api/skills/${id}`);
    dispatch(updateSkillSuccess({ id, skill }));
  } catch (err) {
    dispatch(updateSkillFailure());
  }
};

export const addSkill = async (skill, dispatch) => {
  dispatch(addSkillStart());
  try {
    const res = await publicRequest.post(`api/skills`, skill);
    dispatch(addSkillSuccess(res.data));
  } catch (err) {
    dispatch(addSkillFailure());
  }
};

export const getProject = async (dispatch) => {
  getProjectStart(dispatch);
  try {
    const res = await publicRequest.get("api/projects");
    dispatch(getProjectSuccess(res.data));
  } catch (err) {
    dispatch(getProjectFailure());
  }
};

export const deleteProject = async (id, dispatch) => {
  dispatch(deleteProjectStart());
  try {
    const res = await userRequest.delete(`api/projects/${id}`);
    dispatch(deleteProjectSuccess(res.data));
  } catch (err) {
    dispatch(deleteProjectFailure());
  }
};

export const updateProject = async (id, project, dispatch) => {
  dispatch(updateProjectStart());
  try {
    // updateconst res = await userRequest.put(`api/projects/${id}`);
    dispatch(updateProjectSuccess({ id, project }));
  } catch (err) {
    dispatch(updateProjectFailure());
  }
};

export const addProject = async (project, dispatch) => {
  dispatch(addProjectStart());
  try {
    const res = await publicRequest.post(`api/projects`, project);
    dispatch(addProjectSuccess(res.data));
  } catch (err) {
    dispatch(addProjectFailure());
  }
};
