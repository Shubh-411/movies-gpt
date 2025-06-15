import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null, // when there is no user, the state will be null
  reducers: {
    addUser: (state, action) => {
      return action.payload; // when a user is added, the state will be updated with the user data
    },
    removeUser: (state, action) => {
      return null; // when a user is removed, the state will be set to null
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
// This file defines a Redux slice for managing user state.
// It includes actions to add and remove a user, updating the state accordingly.
