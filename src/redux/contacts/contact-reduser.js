import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit'
import actions from './contact-action'

const concatsReducers = [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]

const contact = createReducer([...concatsReducers], {
   [actions.addContacts]: (state, { payload }) => [payload, ...state],
   [actions.deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload)
}) 

const filter = createReducer('', {
   [actions.changeFilter]: (_, { payload }) => payload
})

const contactReducer = combineReducers ({
   contact,
   filter,
});

export default contactReducer;








// const contact = (state = [], { type, payload }) => {
  
//    switch (type) {
//       case 'contacts_add':
//          return [...state, payload]
      
//       case 'contacts_delete':
//          return  state.filter(contact => contact.id !== payload)

//       default:
//          return state;
//   }
// }

// const filter = (state = '', { type, payload }) => {
//    switch (type) {
//       case 'change-filter':
//          return payload;
      
//       default:
//          return state;
//    }
// }