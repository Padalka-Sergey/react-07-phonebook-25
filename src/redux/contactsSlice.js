import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { contactsData } from 'data/contactsData';

const initialState = {
  value: contactsData,
  //   value: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      //action.payload - это новый контакт
      state.value.push(action.payload);
    },
    removeContact: (state, action) => {
      //action.payload - это id
      const index = state.value.findIndex(
        contact => contact.id === action.payload
      );
      state.value.splice(index, 1);
    },
  },
});

const persistConfig = {
  // key: 'root',
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, removeContact } = contactsSlice.actions;

// Selectors
export const getContactsValue = state => state.contacts.value;
