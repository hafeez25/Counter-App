import { configureStore } from "@reduxjs/toolkit";
import { counterReducers } from "./counteSlice";

const store = configureStore({
  reducer: {
    counter: counterReducers,
  },
});

export default store;
