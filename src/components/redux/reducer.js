import { ADD_DETAILS } from "./actionType";
import { v4 as uuidv4 } from "uuid";
const initialState = {
employess:[]
};
const detailReducer = (state = initialState, { type, payload }) => {
  console.log('state', payload)
  switch (type) {
    case ADD_DETAILS:
      return { 
        ...state, 
        employess:[ ...state.employess,{ id:uuidv4(),...payload}]
        };

    default:
      return state;
  }
};

export default detailReducer;
