import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts, loadMoreAdverts } from "./operations";

const advertsInitialState = {
  items: [],
  loading: false,
  error: null,
  isAllAdvertsLoaded: false,
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
      })
      .addCase(loadMoreAdverts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadMoreAdverts.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload.length === 0) {
          state.isAllAdvertsLoaded = true;
        } else {
          state.items.push(...payload);
          if (payload.length < 4) {
            state.isAllAdvertsLoaded = true;
          }
        }
      })
      .addCase(loadMoreAdverts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});

export const advertsReducer = advertsSlice.reducer;
