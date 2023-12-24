import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import data from "../../data";

export const addExistItem = createAsyncThunk(
  "Cart/addExistItem",
  async (state, action) => {
    console.log("state:", state);
    console.log("action:", action.payload);
  }
);

const slice = createSlice({
  name: "cart",
  initialState: [],
  // initialState: data,
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
      // return newState;

      // const quantity = targetedItem.quantity;
    },
    addToCart: (state, action) => {
      // console.log("state:", state);
      // console.log("action:", action);
      state.push(action.payload);
    },
    removeAllItems: () => {
      return [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addExistItem.fulfilled, (state, action) => {
      console.log("state:", state);
      console.log("action:", action.payload);

      // state.push(action.payload);
    });
  },
});

export default slice.reducer;

export const { removeAllItems, removeItem, incrementValue, addToCart } =
  slice.actions;
