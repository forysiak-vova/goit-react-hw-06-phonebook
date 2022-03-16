import ContactItem from '../ContactItem'
import { useSelector, useDispatch } from 'react-redux'
import { List } from './ContactList.styles'
import deleteCont from '../../redux/contacts/contact-action';
import { getContact, getFilter } from '../../redux/contacts/contact-selectors'
import {getVisibleContacts} from './contactList-selectors'


// const getVisibleContacts = (allContact, filter) => {
   
//     const normalizeFilter = filter.toLowerCase();
//     return allContact.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
//    }

function ContactList() {
   // const contact = useSelector(getContact)
   // const filter = useSelector(getFilter)
   // const contacts = useSelector(state => getVisibleContacts(state.counter.contact, state.counter.filter))
   const contacts = useSelector(getVisibleContacts)
   //  const getVisibleContacts = (allContact, filter) => {
   
   //  const normalizeFilter = filter.toLowerCase();
   //  return allContact.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
   // }
    

   const dispatch = useDispatch();
   
  

   
      // const contacts = getVisibleContacts(cont);
      // console.log(contacts)
   
   
   
 

  
   return (
      <List>
            {contacts.map(({ id, name, number }) =>
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
               onDeleteContact={ id => dispatch(deleteCont.deleteContact(id))}
               
            />
           )}
      </List>
   )
}
export default ContactList;
























// ContactList.propTypes = {
//    contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//            id: PropTypes.string.isRequired,
//            name: PropTypes.string.isRequired,
//            number: PropTypes.string.isRequired,
//       })
//    ),
//    onDeleteContact: PropTypes.func.isRequired,

// }

//  const getVisibleContacts = (allContact, filter) => {
   
//     const normalizeFilter = filter.toLowerCase();
//     return allContact.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
//   }

// const mapStateTopops = state => {
//     const { contact, filter} = state.counter;


//     const visibleContacts = getVisibleContacts(contact, filter);
//   return {
//       contacts: visibleContacts
//    }
// }

// const mapDispatchToProps = dispatch => ({
// onDeleteContact: (id) => dispatch(deleteCont.deleteContact(id))
// })





// =========================================================================================

// import ContactItem from '../ContactItem'
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux'
// import { List } from './ContactList.styles'
// import deleteCont from '../../redux/contacts/contact-action';

// function ContactList({ contacts, onDeleteContact }) {
//    console.log(contacts)
//    return (
//       <List>
//             {contacts.map(({ id, name, number }) =>
//             <ContactItem
//                key={id}
//                id={id}
//                name={name}
//                number={number}
//                onDeleteContact={onDeleteContact}
               
//             />
//            )} 
//       </List>
//    )
// }

// ContactList.propTypes = {
//    contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//            id: PropTypes.string.isRequired,
//            name: PropTypes.string.isRequired,
//            number: PropTypes.string.isRequired,
//       })
//    ),
//    onDeleteContact: PropTypes.func.isRequired,

// }

//  const getVisibleContacts = (allContact, filter) => {
   
//     const normalizeFilter = filter.toLowerCase();
//     return allContact.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
//   }

// const makeStateTopops = state => {
//     const { contact, filter} = state.counter;


//     const visibleContacts = getVisibleContacts(contact, filter);
//   return {
//       contacts: visibleContacts
//    }
// }

// const mapDispatchToProps = dispatch => ({
// onDeleteContact: (id) => dispatch(deleteCont.deleteContact(id))
// })

// export default connect(makeStateTopops,mapDispatchToProps)(ContactList);