import {
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT,
} from "./actionTypes";

const signInData = {
  userData: {},
  isAuth: false,
  isLoading: false,
  isError: false,
  successfullyCreated: false,
  createAccountLoading: false,
  createAccountError: false,
};

export const reducer = (state = signInData, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        userData: payload,
      };

    case SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case CREATE_REQUEST:
      return {
        ...state,
        createAccountLoading: true,
      };

    case CREATE_SUCCESS:
      return {
        ...state,
        createAccountLoading: false,
        successfullyCreated: true,
        createAccountError: false,
        isAuth: false,
        userData: payload,
      };

    case CREATE_FAILURE:
      return {
        ...state,
        createAccountLoading: false,
        successfullyCreated: false,
        createAccountError: true,
      };

    case SIGNOUT:
      return {
        ...state,
        userData: {},
        isAuth: false,
        isLoading: false,
        isError: false,
        successfullyCreated: false,
        createAccountLoading: false,
        createAccountError: false,
      };
    default:
      return state;
  }
};
