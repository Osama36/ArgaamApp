import {USER_LOGIN, RESET_STORE} from './authTypes';

// import axios from '../../constants/axios';
// import EndPoints from '../../constants/config';

export const loginUser = (userData) => {
  return async (dispatch, getState) => {
    // try {
    //   const response = await axios.post(EndPoints.LOGIN, {
    //     param: userData,
    //   });
    //   console.log('loginUser -> response', response);
    //   const apiResponse = await response.data;
    //   console.log('loginUser -> apiResponse', apiResponse);
    //   if (response.status == 200 && apiResponse.StatusCode == 200) {
    dispatch({
      type: USER_LOGIN,
      payload: {
        userData: '',
      },
    });
    //     return Promise.resolve(apiResponse);
    //   } else {
    //     return Promise.reject(apiResponse);
    //   }
    // } catch (e) {
    //   Promise.reject(e);
    //   console.log(e);
    // }
  };
};

//Logout & Reset Store
export const logoutUser = () => {
  return (dispatch) => {
    return dispatch({
      type: RESET_STORE,
    });
  };
};
