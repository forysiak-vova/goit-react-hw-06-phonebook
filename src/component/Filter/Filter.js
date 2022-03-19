import { useSelector, useDispatch } from 'react-redux'
import changeFil from '../../redux/contacts/contact-action'
import { Input, Label } from './Filter.styles'
import { getFilter } from '../../redux/contacts/contact-selectors'

const Filter = () => {
   const value = useSelector(getFilter)
   const dispatch = useDispatch()
   return (
      <Label>
            Find contacts by name:
         <Input
            type='text'
            value={value}
            onChange={(e) => dispatch(changeFil.changeFilter(e.currentTarget.value))}
         />
      </Label>
   )}

export default Filter;