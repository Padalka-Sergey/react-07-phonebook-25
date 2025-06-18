import { useDispatch, useSelector } from 'react-redux';
import { removeContact, getContactsValue } from '../../redux/contactsSlice';
import { getFilterValue } from '../../redux/filterSlice';
import { NameBox, Button } from './ContactListItem.styled';

export const ContactListItem = () => {
  const contacts = useSelector(getContactsValue);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const filterNames = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filterNames.map(contact => (
    <li key={contact.id}>
      <NameBox>
        {contact.name}: {contact.number}
      </NameBox>

      <Button type="button" onClick={() => dispatch(removeContact(contact.id))}>
        Delete
      </Button>
    </li>
  ));
};
