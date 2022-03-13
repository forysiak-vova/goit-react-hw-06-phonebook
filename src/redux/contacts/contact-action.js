// import MYACTION from './contact-types'
import { nanoid } from 'nanoid';

const addContacts = ({ name, number }) => {
   return {
      type: 'contacts_add',
      payload: {
        id: nanoid(),
        name,
        number,
      },
   }
};

const deleteContact = contactId => {
   return {
      type: 'contacts_delete',
      payload: contactId,
   }
}

const changeFilter = value => ({
   type: 'change-filter',
   payload: value,
})

export default {addContacts, deleteContact, changeFilter};

