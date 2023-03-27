import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = {
  counter: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

export const counterReducers = counterSlice.reducer;
export const counterAction = counterSlice.actions;
