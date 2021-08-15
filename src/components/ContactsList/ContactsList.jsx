import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { fetchContacts, deleteContact } from 'redux/contacts';
import { getFiltredContactsList } from 'redux/contacts/contactsSelectors';

import {
  Contacts,
  ContactsItem,
  ContactsDetails,
  Button,
} from 'components/ContactsList/ContactsList.styled';

function ContactsList() {
  const contacts = useSelector(getFiltredContactsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Contacts>
      {contacts &&
        contacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <div>
                <ContactsDetails>
                  <FaUser size={14} />
                  <span>
                    <b>{name}</b>
                  </span>
                </ContactsDetails>
                <ContactsDetails>
                  <FaPhoneAlt size={14} />
                  <span>{number}</span>
                </ContactsDetails>
              </div>
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </ContactsItem>
          );
        })}
    </Contacts>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ContactsList;
