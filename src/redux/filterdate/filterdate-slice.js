import { createSlice } from '@reduxjs/toolkit';

const filterDateSlice = createSlice({
  name: 'filterdate',
  initialState: '2023-06-23',
  reducers: {
    setFilterDate: (_, { payload }) => payload,
  },
});

export const { setFilterDate } = filterDateSlice.actions;
export const filterDateReducer = filterDateSlice.reducer;
