import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Importing the user reducer
// this store will take a configuration object with a reducer, and reducer will have different reducers from different slices
const appStore = configureStore({
  reducer: {
    user: userReducer, // Adding the user reducer to the store
  },
});

export default appStore;
