import { createSlice } from "@reduxjs/toolkit";
// import data from "../../data";

const slice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalCount: 0,
  },
  // initialState: data,
  reducers: {
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increase: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeAllItems: (state) => {
      state.items = [];
    },
    cartTotal: (state, action) => {
      let { totalAmount, totalCount } = action.payload.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += quantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    getTotalCount: (state, action) => {
      let { totalAmount, totalCount } = action.payload.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += quantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
  },
});

export default slice.reducer;
export const {
  removeAllItems,
  removeItem,
  increase,
  decrease,
  addToCart,
  cartTotal,
} = slice.actions;
