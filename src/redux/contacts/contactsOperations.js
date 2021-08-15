import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactApi from 'services/contactApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await contactApi.fetchContacts();
    return contacts;
  },
);
