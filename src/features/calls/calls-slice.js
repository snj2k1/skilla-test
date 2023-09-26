import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCalls = createAsyncThunk(
  "@@calls/fetchCalls",
  async (filters, { extra: { client, api } }) => {
    const data = await client
      .post(api.CALLS_URL, filters, {
        ...api.CALLS_OPTIONS,
      })
      .then((response) => response.data);
    return data;
  }
);

const callSlice = createSlice({
  name: "calls",
  initialState: {
    calls: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCalls.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchCalls.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.calls = action.payload;
      })
      .addCase(fetchCalls.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export const callsReducer = callSlice.reducer;
export const selectCallInfo = (state) => ({
  status: state.calls.loading,
  error: state.calls.error,
  qty: state.calls.calls.length,
});
export const selectCallsList = (state) => state.calls.calls;
