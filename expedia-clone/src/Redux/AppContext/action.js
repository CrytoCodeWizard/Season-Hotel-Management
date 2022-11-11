import axios from "axios";
import * as types from "./actionTypes";
const getHotelsRequest = () => {
  return {
    type: types.GET_HOTELS_REQUEST,
  };
};
const getHotelsSuccess = (payload) => {
  return {
    type: types.GET_HOTELS_SUCCESS,
    payload,
  };
};
const getHotelsFailure = () => {
  return {
    type: types.GET_HOTELS_FAILURE,
  };
};

const getHotels = (payload) => (dispatch) => {
  dispatch(getHotelsRequest());
  return axios
    .get(`https://636b1db9b10125b78feba23b.mockapi.io/${payload.location}`)
    .then((r) => {
      console.log(payload)
      payload = { ...payload, hotels: r.data };
      dispatch(getHotelsSuccess(payload));
    })
    .catch((e) => {
      dispatch(getHotelsFailure(e));
      alert("City not found");
    });
};

export { getHotels, getHotelsFailure, getHotelsRequest, getHotelsSuccess };
