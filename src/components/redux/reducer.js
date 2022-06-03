import {
  ADD_DETAILS,
  DELETE_USER,
  SELECT_DETAILS,
  UPDATE_DETAILS,
} from "./actionType";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  employess: [],
  employee: {},
};

const detailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_DETAILS:
      return {
        ...state,
        employess: [...state.employess, { id: uuidv4(), ...payload }],
      };
    case SELECT_DETAILS:
      return {
        ...state,
        employee: payload,
      };

    case UPDATE_DETAILS:
      const index = state.employess.findIndex((item) => item.id === payload.id);

      return {
        ...state,
        ...(state.employess[index] = payload),
      };
    case DELETE_USER:
      const user = state.employess.filter((item) => item.id !== payload);
      console.log(user);
      return {
        ...state,
        employess: user,
      };
    default:
      return state;
  }
};

export default detailReducer;
