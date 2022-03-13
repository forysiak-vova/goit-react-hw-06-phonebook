import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import changeFil from '../../redux/contacts/contact-action'
import { Input, Label } from './Filter.styles'

const Filter = ({value,onChange}) => 
   (
      <Label>
        Find contacts by name:
         <Input
         type='text'
            value={value}
            onChange={onChange}
         />
</Label>
   )
     
Filter.propTypes = {
   value: PropTypes.string,
   onChange: PropTypes.func,
};
  
const mapStateToProps = state => {
 
 return  {
      value: state.counter.filter,
   }
}

const mapDispatchToProps = dispatch => ({
   onChange: (e) => dispatch(changeFil.changeFilter(e.currentTarget.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);