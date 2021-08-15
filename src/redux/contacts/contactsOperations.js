import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactApi from 'services/contactApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await contactApi.fetchContacts();
    return contacts;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const contact = await contactApi.addContact(newContact);
    return contact;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await contactApi.deleteContact(contactId);
    return contactId;
  },
);
