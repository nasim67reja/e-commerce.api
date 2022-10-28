import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  user: null,
};

const userSlice = createSlice({
  name: "currentUser",
  initialState: initialUserState,
  reducers: {
    storeUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
