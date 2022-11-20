import { GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCESS, GET_POST_SUCCESS, GET_POST_LOADING, GET_POST_ERROR } from "../actionType/userActionTypes";
import axios from "axios";

export const getUserSuccess = (data) => {
  return {
    type: GET_USER_SUCESS,
    payload: data,
  }
}

export const getUserLoading = (data) => {
  return {
    type: GET_USER_LOADING,
  }
}

export const getUserError = (err) => {
  return {
    type: GET_USER_ERROR,
    payload: err,
  }
}

export const getData = () => async(dispatch) => {
  try{
    dispatch(getUserLoading());
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    dispatch(getUserSuccess(res.data));
    try {
      dispatch(getPostLoading());
      const userData = await axios.get("https://jsonplaceholder.typicode.com/posts")
      dispatch(getPostSuccess(userData.data));
    } catch (err) {
      dispatch(getPostError(err));
    }
  } catch (err) {
    dispatch(getUserError(err));
  }
}

export const getPostSuccess = (data) => {
  return{
    type: GET_POST_SUCCESS,
    payload: data,
  }
}

export const getPostLoading = (data) => {
  return {
    type: GET_POST_LOADING,
  }
}

export const getPostError = (err) => {
  return {
    type: GET_POST_ERROR,
    payload: err,
  }
}

