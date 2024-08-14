import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const advertsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: advertsInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchAdverts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});

export const advertsReducer = advertsSlice.reducer;
