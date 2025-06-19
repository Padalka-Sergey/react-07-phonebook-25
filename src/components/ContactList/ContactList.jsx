import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsAll } from '../../redux/operations';
import { selectContactsValue } from '../../redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ children }) => {
  const dispatch = useDispatch();
  const {
    value: contacts,
    isLoading,
    error,
  } = useSelector(selectContactsValue);

  useEffect(() => {
    dispatch(fetchContactsAll());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <p>
          <b>LOADING....</b>
        </p>
      )}
      {error && (
        <p>
          <b>{error}</b>
        </p>
      )}
      {contacts.length > 0 && (
        <>
          {children}
          <ul>
            <ContactListItem />
          </ul>
        </>
      )}
    </>
  );
};
