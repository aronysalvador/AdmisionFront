import {
    GET_BP_INIT,
  } from "../types/bpType";
  
  const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null,
  };
  
  export default function bpForm(state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_BP_INIT:
        return { ...state, loading: true };
  
      default:
        return { ...state };
    }
  }
  