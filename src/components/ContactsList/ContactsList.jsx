import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import {
  fetchContacts,
  deleteContact,
  getFiltredContactsList,
  getLoadingStatus,
} from 'redux/contacts';

import {
  Contacts,
  ContactsItem,
  ContactsDetails,
  Button,
} from 'components/ContactsList/ContactsList.styled';

function ContactsList() {
  const isLoading = useSelector(getLoadingStatus);
  const contacts = useSelector(getFiltredContactsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOnDeleteBtn = (id, name) => {
    dispatch(deleteContact(id));
    toast.success(`Contact ${name} deleted`);
  };

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
              <Button type="button" onClick={() => handleOnDeleteBtn(id, name)}>
                Delete
              </Button>
            </ContactsItem>
          );
        })}
      {isLoading && <div>Loading...</div>}
    </Contacts>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ContactsList;
