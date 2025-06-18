import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsAll } from '../../redux/operations';
import { removeContact } from '../../redux/contactsSlice';
import { selectContactsValue } from '../../redux/selectors';
import { selectFilterValue } from '../../redux/selectors';
import { NameBox, Button } from './ContactListItem.styled';

export const ContactListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsValue);
  console.log(contacts);
  console.log('contacts');
  // const {
  //   value: contacts,
  //   isLoading,
  //   error,
  // } = useSelector(selectContactsValue);
  const filter = useSelector(selectFilterValue);
  const filterNames = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContactsAll());
  }, [dispatch]);

  return filterNames.map(contact => (
    <li key={contact.id}>
      <NameBox>
        {contact.name}: {contact.number}
      </NameBox>

      {/* <Button type="button" onClick={() => dispatch(removeContact(contact.id))}> */}
      <Button type="button">Delete</Button>
    </li>
  ));
};

// export const ContactListItem = () => {
//   const contacts = useSelector(selectContactsValue);
//   const filter = useSelector(selectFilterValue);
//   const dispatch = useDispatch();
//   const filterNames = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return filterNames.map(contact => (
//     <li key={contact.id}>
//       <NameBox>
//         {contact.name}: {contact.number}
//       </NameBox>

//       <Button type="button" onClick={() => dispatch(removeContact(contact.id))}>
//         Delete
//       </Button>
//     </li>
//   ));
// };
