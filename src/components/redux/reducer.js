import { ADD_DETAILS, SELECT_DETAILS, UPDATE_DETAILS } from "./actionType";
import { v4 as uuidv4 } from "uuid";
import produce, { Immer } from "immer";
const initialState = {
employess:[],
employee:{}
};
const detailReducer = (state = initialState, { type, payload }) => {
  console.log('state', payload)
  switch (type) {
    case ADD_DETAILS:{
      let newState=produce(state,(draft)=>{
        draft.employess.push(payload)
      })
      return newState}
    case SELECT_DETAILS:{
      let newState=produce(state,(draft)=>{
        console.log(payload)
        draft.employee=payload
        
      })
      return newState}
      
    
        
    default:
      return state;
  }
};

export default detailReducer;
