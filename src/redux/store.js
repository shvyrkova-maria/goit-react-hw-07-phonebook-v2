// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import contactsReducer from './contacts/contactsReducer';

// const middleware = [...getDefaultMiddleware(), logger];

// const store = configureStore({
//   reducer: {
//     phonebook: contactsReducer,
//   },
//   devTools: process.env.NODE_ENV === 'development',
//   middleware,
// });

// export { store };

import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contactsSlices';

const store = configureStore({
  reducer: contactsReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
