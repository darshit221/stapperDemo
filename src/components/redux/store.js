import { createStore } from "redux";
import detailReducer from "./reducer";

const store = createStore(
  detailReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
