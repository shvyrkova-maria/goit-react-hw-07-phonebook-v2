import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { fetchContacts, addContact, deleteContact } from 'redux/contacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      items: payload,
    }), //нужно ли обнулять ошибку?
    // [fetchContacts.pending]: (_, { payload }) => payload,
    // [fetchContacts.rejected]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, { payload }) => {
      return { ...state, items: [payload, ...state.items], error: null };
    },

    [addContact.rejected]: (state, { payload }) => {
      return { ...state, error: payload };
    },

    [deleteContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== payload),
      };
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue(_, { payload }) {
      return payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;

const contacts = contactsSlice.reducer;
const filter = filterSlice.reducer;

export default combineReducers({
  contacts,
  filter,
});
