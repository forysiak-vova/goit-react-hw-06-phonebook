// import { combineReducers } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './contacts/contact-reduser'
import { configureStore, } from "@reduxjs/toolkit";
import logger from 'redux-logger'
// import { applyMiddleware } from 'redux';

// const rootReduser = combineReducers({
//    counter: contactReducer,
// })

// const store = createStore(rootReduser, composeWithDevTools());

const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

const store = configureStore({
   reducer: {
   counter: contactReducer,
   },
    middleware,
    devTools: process.env.NODE_ENV === 'development'
})

export default store;
