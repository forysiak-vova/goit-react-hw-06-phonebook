import { combineReducers } from "redux";
// import contacts_add from './contact-action'

const contact = (state = [], { type, payload }) => {
  
   switch (type) {
      case 'contacts_add':
         return [...state, payload]
      
      case 'contacts_delete':
         return  state.filter(contact => contact.id !== payload)

      default:
         return state;
  }
}

const filter = (state = '', { type, payload }) => {
   switch (type) {
      case 'change-filter':
         return payload;
      
      default:
         return state;
   }
}

const contactReducer = combineReducers ({
   contact,
   filter,
});

export default contactReducer;