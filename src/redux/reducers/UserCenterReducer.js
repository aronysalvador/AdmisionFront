import {
    POST_USERCENTER_INIT,
    POST_USERCENTER_SUCCESS,
    POST_USERCENTER_FAILURE
  } from "../types/UserCenterType";

  const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null
  };

  export default function userCenterForm(state = INITIAL_STATE, action) {
    switch (action.type) {
      case POST_USERCENTER_INIT:
        return { ...state, loading: true };

      case POST_USERCENTER_SUCCESS:
        return {
          ...state,
          loading: false
        };

      case POST_USERCENTER_FAILURE:
        return { ...state, error: action.payload, loading: false };

      default:
        return { ...state };
    }
  }