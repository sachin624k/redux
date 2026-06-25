import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, actions) => {
      state.value += actions.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer; // defualt jo bhi send krte hai usko hum kisi bhi naam se import kar skte hai ex. store.js me hum counterReducer ke naam se import kiya counterSlice.reducer ko
