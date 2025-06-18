import { useSelector, useDispatch } from 'react-redux';
import { filterContacts, getFilterValue } from '../../redux/filterSlice';
import { LabelFilter, InputFilter } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="search"
        name="filter"
        title="Сontact search field"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
        required
      />
    </LabelFilter>
  );
};
