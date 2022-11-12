import * as types from "./actionTypes";
const initialState = {
  hotels: [],
  checkInDate: "",
  checkOutDate: "",
  rooms: 1,
  adults: 1,
  child: 0,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_HOTELS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_HOTELS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hotels: payload.hotels,
        rooms: payload.rooms,
        adults: payload.adults,
        child: payload.child,
        checkInDate: payload.checkInDate,
        checkOutDate: payload.checkOutDate,
      };
    case types.GET_HOTELS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
