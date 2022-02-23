import { ADD_DETAILS } from "./actionType";

const initialState = {
  firstName: "",
  lastName: "",
  dob: "",
  phone: "",
  email: "",
  accountNumber: "",
  ifsc: "",
  panCard: "",
  adharCard: "",
  year: "",
  month: "",
  skills: "",
  designation: "",
  department: "",
  ctc: "",
  workingForm: "",
  company: "",
  E_designation: "",
  E_department: "",
  E_ctc: "",
  From: "",
  to: "",
};
const detailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_DETAILS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default detailReducer;
