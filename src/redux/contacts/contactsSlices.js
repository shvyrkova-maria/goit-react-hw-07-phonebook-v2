import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { fetchContacts, addContact, deleteContact } from 'redux/contacts';

// ========= contactsSlice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (_, { payload }) => ({ items: payload }),

    [addContact.fulfilled]: (state, { payload }) => ({
      items: [payload, ...state.items],
    }),

    [deleteContact.fulfilled]: (state, { payload }) => ({
      items: state.items.filter(contact => contact.id !== payload),
    }),
  },
});

// ========= filterSlice
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue: (_, { payload }) => payload,
  },
});
export const { setFilterValue } = filterSlice.actions;

// ========= errorSlice
const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  extraReducers: {
    [fetchContacts.pending]: () => null,
    [fetchContacts.rejected]: (_, action) => action.error.message,

    [addContact.pending]: () => null,
    [addContact.rejected]: (_, action) => action.error.message,

    [deleteContact.pending]: () => null,
    [deleteContact.rejected]: (_, action) => action.error.message,
  },
});

// ========= loadingSlice
const loadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  extraReducers: {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
  },
});

const contacts = contactsSlice.reducer;
const filter = filterSlice.reducer;
const error = errorSlice.reducer;
const isLoading = loadingSlice.reducer;

export default combineReducers({
  contacts,
  filter,
  error,
  isLoading,
});
