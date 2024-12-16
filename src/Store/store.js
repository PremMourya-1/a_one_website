import { configureStore } from "@reduxjs/toolkit";

const combineReducer = {};

export const store = configureStore({
  reducer: combineReducer,
});
