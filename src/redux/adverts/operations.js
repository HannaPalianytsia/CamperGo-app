import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://662cb63d0547cdcde9def55e.mockapi.io/";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAdverts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?&page=1&limit=4`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loadMoreAdverts = createAsyncThunk(
  "adverts/loadMoreAdverts",
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?&page=${page}&limit=4`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAdverts = async (page) => {
  const { data } = await axios.get(`/adverts?&page=${page}&limit=4`);
  return data;
};
