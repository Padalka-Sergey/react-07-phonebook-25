import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsAll } from './operations';

// import { contactsData } from 'data/contactsData';

// const initialState = {
// value: contactsData,
//   value: [],
//   isLoading: false,
//   error: null,
// };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    value: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsAll.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContactsAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.value = action.payload;
      })
      .addCase(fetchContactsAll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: (state, action) => {
//       //action.payload - это новый контакт
//       state.value.push(action.payload);
//     },
//     removeContact: (state, action) => {
//       //action.payload - это id
//       const index = state.value.findIndex(
//         contact => contact.id === action.payload
//       );
//       state.value.splice(index, 1);
//     },
//   },
// });
