import ContactItem from '../ContactItem'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { List } from './ContactList.styles'
import deleteCont from '../../redux/contacts/contact-action';

function ContactList({contacts,onDeleteContact}) {
   return (
      <List>
            {contacts.map(({ id, name, number }) =>
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
               onDeleteContact={onDeleteContact}
               
            />
           )} 
      </List>
   )
}

ContactList.propTypes = {
   contacts: PropTypes.arrayOf(
      PropTypes.shape({
           id: PropTypes.string.isRequired,
           name: PropTypes.string.isRequired,
           number: PropTypes.string.isRequired,
      })
   ),
   onDeleteContact: PropTypes.func.isRequired,

}

 const getVisibleContacts = (allContact, filter) => {
   
    const normalizeFilter = filter.toLowerCase();
    return allContact.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  }

const makeStateTopops = state => {
    const { contact, filter} = state.counter;


    const visibleContacts = getVisibleContacts(contact, filter);
  return {
      contacts: visibleContacts
   }
}

const mapDispatchToProps = dispatch => ({
onDeleteContact: (id) => dispatch(deleteCont.deleteContact(id))
})

export default connect(makeStateTopops,mapDispatchToProps)(ContactList);