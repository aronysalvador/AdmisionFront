import {
    GET_BP_INIT
  } from "../types/bpType";
  

  export const setBP = (nuevoBP) => async (dispatch) => {
    // dispatch({
    //   type: GET_BP_INIT,
    //   payload: true,
    // });
  console.log("SETBP:", nuevoBP);
    dispatch(successCallBP(nuevoBP));
  
    const successCallBP = (nuevoBP) => ({
      type: GET_BP_INIT,
      payload: nuevoBP,
    });
  };
  