import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "cart",
  initialState: [data],
  reducers: {},
});

export default slice.reducer;
