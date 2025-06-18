import { useSelector } from 'react-redux';
import { selectContactsValue } from '../../redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ children }) => {
  const contacts = useSelector(selectContactsValue);
  console.log(contacts);
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
