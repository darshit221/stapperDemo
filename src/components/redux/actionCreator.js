import { ADD_DETAILS, DELETE_USER, SELECT_DETAILS, UPDATE_DETAILS } from "./actionType"


const addDetails=(formdetails)=>({type:ADD_DETAILS,payload:formdetails})
const selectDetails=(employee)=>({type:SELECT_DETAILS,payload:employee})
const updateDetails=(id)=>({type:UPDATE_DETAILS,payload:id})
const deleteUser=(id)=>({type:DELETE_USER,payload:id})
export {addDetails,updateDetails,selectDetails,deleteUser}