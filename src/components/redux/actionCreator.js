import { ADD_DETAILS, SELECT_DETAILS, UPDATE_DETAILS } from "./actionType"


const addDetails=(formdetails)=>({type:ADD_DETAILS,payload:formdetails})
const selectDetails=(employee)=>({type:SELECT_DETAILS,payload:employee})
const updateDetails=(id)=>({type:UPDATE_DETAILS,payload:id})
export {addDetails,updateDetails,selectDetails}