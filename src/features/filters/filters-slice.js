import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "@@filter",
  initialState: {
    labels: {
      in_out: "",
      sort_by: "date",
    },
  },
  reducers: {
    setInOut: (state, action) => {
      state.labels.in_out = action.payload;
    },
    setSortBy: (state, action) => {
      state.labels["sort_by"] = action.payload;
    },
    setDate: (state, action) => {
      state.labels.date_start = action.payload[0];
      state.labels.date_end = action.payload[1];
    },
    clearDate: (state, _) => {
      delete state.labels.date_start;
      delete state.labels.date_end;
    },
  },
});

export const { setInOut, setSortBy, setDate, clearDate } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const selectFilters = (state) => state.filters.labels;
