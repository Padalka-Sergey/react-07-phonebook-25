import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsAll, addContact, deleteContact } from './operations';
// import { contactsData } from 'data/contactsData';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    value: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsAll.pending, handlePending)
      .addCase(fetchContactsAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.value = action.payload;
      })
      .addCase(fetchContactsAll.rejected, handleRejected)
      // ===================================================================
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.value.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      // ====================================================================
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.value.findIndex(
          task => task.id === action.payload.id
        );
        state.value.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

// export const { addContact, removeContact } = contactsSlice.actions;
