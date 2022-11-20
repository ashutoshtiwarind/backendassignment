import {GET_POST_ERROR, GET_POST_LOADING, GET_POST_SUCCESS, GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCESS } from "../actionType/userActionTypes";

const init = { loading: false, userData: [], error: false, post: []};

export const reducer = (state = init,{ type, payload }) => {
  switch(type) {
      case GET_USER_LOADING:
        return {
          ...state,
          loading: true,
        }
      case GET_USER_SUCESS:
        return {
          ...state,
          userData: payload,
          loading: false,
        }
      case GET_USER_ERROR:
        return {
          ...state,
          loading: false,
          error: payload,
        }

        case GET_POST_LOADING:
          return {
            ...state,
            loading: true,
          }
        case GET_POST_SUCCESS:
          return {
            ...state,
            post: payload,
            loading: false,
          }
        case GET_POST_ERROR:
          return {
            ...state,
            loading: false,
            error: payload,
          }
      default:
        return state;
  }
};