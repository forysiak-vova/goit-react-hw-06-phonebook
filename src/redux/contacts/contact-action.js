import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit'

const addContacts = createAction('contacts_add', ({ name, number }) => ({
   payload: {
      id: nanoid(),
      name,
      number,
   },
}));

const deleteContact = createAction('contacts_delete');
const changeFilter = createAction('change-filter');

export default { addContacts, deleteContact, changeFilter };
