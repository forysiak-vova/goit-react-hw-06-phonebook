import React, { useState } from "react";
import { Label, Input, Button } from './Form.styles'
import { useSelector, useDispatch } from 'react-redux'
import addCont from '../../redux/contacts/contact-action';
import { getContact } from '../../redux/contacts/contact-selectors'

const Form = () => {
   const contact = useSelector(getContact)
   const dispatch = useDispatch();
   
   const [name, setName] = useState('')
   const [number, setNumber] = useState('')

    const handelChange = e => {
       const { name, value } = e.currentTarget;
      
        switch (name) {
           case 'name':
              setName(value);
              break;
           case 'number':
              setNumber(value);
              break;
           default:
              return;
 }
   };



  const handelSubmit = e => {
     e.preventDefault();

         const ReturnName = contact.find(contact => contact.name === name);

    if (ReturnName) {
      alert('This name is already in the phone book ');
    } else {
   
     dispatch(addCont.addContacts({ name, number }));
    }
     
     


     setName('')
     setNumber('')
   };

  
      
      return (
         <form onSubmit={handelSubmit}>
            <Label>
               <h4> Name</h4>
           
            <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
           value={name}
           onChange={handelChange}
        />
         </Label>
            <Label>
               <h4>Phone</h4>
             
           <Input
             type="tel"
             name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
             value={number}
             onChange={handelChange}
           />
         </Label>
         <Button type='submit'>Add contact</Button>
      </form>
      )
   
}

export default Form;















// import React, { useState } from "react";
// import PropTypes from 'prop-types';
// import { Label, Input, Button } from './Form.styles'
// import {connect} from 'react-redux'

// const Form = ({onSubmit}) => {

//    const [name, setName] = useState('')
//    const [number, setNumber] = useState('')

//     const handelChange = e => {
//        const { name, value } = e.currentTarget;
      
//         switch (name) {
//            case 'name':
//               setName(value);
//               break;
//            case 'number':
//               setNumber(value);
//               break;
//            default:
//               return;
//  }
//    };
//   const handelSubmit = e => {
//       e.preventDefault();

    
    
//       onSubmit({name, number})

//      setName('')
//      setNumber('')
//    };

  
      
//       return (
//          <form onSubmit={handelSubmit}>
//             <Label>
//                <h4> Name</h4>
           
//             <Input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//            required
//            value={name}
//            onChange={handelChange}
//         />
//          </Label>
//             <Label>
//                <h4>Phone</h4>
             
//            <Input
//              type="tel"
//              name="number"
//              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//              required
//              value={number}
//              onChange={handelChange}
//            />
//          </Label>
//          <Button type='submit'>Add contact</Button>
//       </form>
//       )
   
// }


// Form.propTypes = {
//  onSubmit: PropTypes.func.isRequired,
// }

// export default connect()(Form);

// =========================================================================

// import React, { useState } from "react";
// // import PropTypes from 'prop-types';
// import { Label, Input, Button } from './Form.styles'
// import { connect, useSelector, useDispatch } from 'react-redux'
// import addCont from '../../redux/contacts/contact-action'

// const Form = ({contact, onSubmit}) => {
//    // const contact = useSelector(state => state.counter.contact)
//    // console.log(contact);
//    // const dispatch = useDispatch();
   
//    const [name, setName] = useState('')
//    const [number, setNumber] = useState('')

//     const handelChange = e => {
//        const { name, value } = e.currentTarget;
      
//         switch (name) {
//            case 'name':
//               setName(value);
//               break;
//            case 'number':
//               setNumber(value);
//               break;
//            default:
//               return;
//  }
//    };



//   const handelSubmit = e => {
//      e.preventDefault();

//    //       const ReturnName = contact.find(contact => contact.name === name);

//    //  if (ReturnName) {
//    //    alert('This name is already in the phone book ');
//    //  } else {
//    //    const contact = {
//    //      name,
//    //      number,
//    //    };
//    //    console.log(contact);
     
//    //    //  setContacts(prevState => [contact, ...prevState]);
//    //  }
  

    
    
//    //   onSubmit(({ name, number }) => dispatch({ name, number }))
     
//    //   dispatch(addCont.addContacts({ name, number }));


//      setName('')
//      setNumber('')
//    };

  
      
//       return (
//          <form onSubmit={handelSubmit}>
//             <Label>
//                <h4> Name</h4>
           
//             <Input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//            required
//            value={name}
//            onChange={handelChange}
//         />
//          </Label>
//             <Label>
//                <h4>Phone</h4>
             
//            <Input
//              type="tel"
//              name="number"
//              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//              required
//              value={number}
//              onChange={handelChange}
//            />
//          </Label>
//          <Button type='submit'>Add contact</Button>
//       </form>
//       )
   
// }


// Form.propTypes = {
//  onSubmit: PropTypes.func.isRequired,
// }
// const makeStateToProps = state => {
//    return {
//       contact: state.counter.contact
//    }
// }
// const mapDispatchToProps = dispatch => ({
//    onSubmit: ({name, number}) => dispatch(addCont.addContacts({name, number}))
// })

// export default connect(makeStateToProps, mapDispatchToProps)(Form);
// export default Form;

// =========================================================================





















// class Form extends Component {
//    static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };
//    state = {
//       name: '',
//       number: ''
//    }

//      handelChange = e => {
//         const { name, value } = e.currentTarget;
//      this.setState({
//        [name]: value
//     })
//    };
//    handelSubmit = e => {
//       e.preventDefault();

    
//       const {name, number} = this.state
//       this.props.onSubmit({name, number})


//       this.setState({name: '',  number: ''})
//    };

//    render() {
      
//       return (
//          <form onSubmit={this.handelSubmit}>
//             <Label>
//                <h4> Name</h4>
           
//             <Input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//            required
//            value={this.state.name}
//            onChange={this.handelChange}
//         />
//          </Label>
//             <Label>
//                <h4>Phone</h4>
             
//            <Input
//              type="tel"
//              name="number"
//              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//              required
//              value={this.state.number}
//              onChange={this.handelChange}
//            />
//          </Label>
//          <Button type='submit'>Add contact</Button>
//       </form>
//       )
//    }
// }


