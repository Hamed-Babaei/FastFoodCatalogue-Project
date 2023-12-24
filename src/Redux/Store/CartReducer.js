import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "cart",
  initialState: data,
  reducers: {
    removeItem: (state, action) => {
      const filteredItems = state.filter((item) => item.id !== action.payload);
      return filteredItems;
    },
    incrementValue: (state, action) => {
      console.log("state", state);
      console.log("action", action);
      let newState = [...state];
      const terget = newState.valueOf(0);
      console.log(terget[0]);
      // const terget = newState.map((item) => item.id === action.payload);
      // console.log(terget);
      // newState[action.payload].quantity++;
      return newState;

      // const quantity = targetedItem.quantity;
    },
    removeAllItems: () => {
      return [];
    },
  },
});

export default slice.reducer;

export const { removeAllItems, removeItem, incrementValue } = slice.actions;
