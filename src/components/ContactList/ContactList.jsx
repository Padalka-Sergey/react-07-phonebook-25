import { useSelector } from 'react-redux';
import { getContactsValue } from '../../redux/contactsSlice';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ children }) => {
  const contacts = useSelector(getContactsValue);
  return (
    contacts.length > 0 && (
      <>
        {children}
        <ul>
          <ContactListItem />
        </ul>
      </>
    )
  );
};
