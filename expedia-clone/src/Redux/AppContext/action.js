import axios from "axios";
import * as types from "./actionTypes";
import { useToast } from "@chakra-ui/react";
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
      payload = { ...payload, hotels: r.data };
      dispatch(getHotelsSuccess(payload));
    })
    .catch((e) => {
      dispatch(getHotelsFailure(e));
      const toast = useToast();
      toast({
        title: "City Not Found.",
        description: "We're not present in this city.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    });
};

export { getHotels, getHotelsFailure, getHotelsRequest, getHotelsSuccess };
