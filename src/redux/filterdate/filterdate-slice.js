import { createSlice } from '@reduxjs/toolkit';

const filterDateSlice = createSlice({
  name: 'filter',
  initialState: new Date(),
  reducers: {
    setFilterDate: (_, { payload }) => payload,
  },
});

export const { setFilterDate } = filterDateSlice.actions;
export const filterDateReducer = filterDateSlice.reducer;
