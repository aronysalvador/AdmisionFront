import {
    POST_USERCENTER_INIT,
    POST_USERCENTER_SUCCESS,
    POST_USERCENTER_FAILURE,
  } from "../types/UserCenterType";
  import Axios from "axios";
  
  export const getData = async (email, centrosForm, token) => {
    let params = {
        email,
        centrosForm
      }

    return Axios.post(window.REACT_APP_CENTER_USER, params, {
      headers: {
          "x-access-token": token
      }
  });
  };
  
  export const setCenter = (email, centrosForm) => async (dispatch, getState) => {
    dispatch({
      type: POST_USERCENTER_INIT,
      payload: true,
    });
  
    getData(email, centrosForm, getState().microsoftReducer.token)
      .then((response) => {
          if(response.status === 200){
            dispatch(successCallUserCenter());
          }else{
            dispatch(errorCallUserCenter("error"));
          }
      })
      .catch((error) => {
        console.log(error)
        dispatch(errorCallUserCenter(error));
      });
  
    const successCallUserCenter = () => ({
      type: POST_USERCENTER_SUCCESS,
    });
  
    const errorCallUserCenter = (error) => ({
      type: POST_USERCENTER_FAILURE,
      payload: error
    });
  };
  