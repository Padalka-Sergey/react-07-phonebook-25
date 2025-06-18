import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   value: contactsData,
  value: '',
  // filter: '',
};

// filter: '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      //action.payload - это e.target.value в инпуте
      state.value = action.payload;
      // state.filter = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;

// Selectors
// export const selectFilterValue = state => state.filter.value;
