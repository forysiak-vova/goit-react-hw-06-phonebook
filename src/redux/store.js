// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";

// const rootReduser = combineReducers({
//    contacts: {
//       contact: '',
//       filter: '',
//    }
// });

// const store = configureStore({
//    reducer: rootReduser,
// });





import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './contacts/contact-reduser'



const rootReduser = combineReducers({
   counter: contactReducer,

})

const store = createStore(rootReduser, composeWithDevTools());

export default store;
