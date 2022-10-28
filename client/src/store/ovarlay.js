import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  backdropVisible: false,
  reviewOvarlayIsVisible: false,
  menuIsVisible: false,
  searchMenuIsVisible: false,
  accountMenu: false,
};

const ovarlaySlice = createSlice({
  name: "overlay-controller",
  initialState: initialUserState,
  reducers: {
    backdropVisible(state) {
      state.backdropVisible = true;
    },
    backdropHidden(state) {
      state.backdropVisible = false;
    },
    reviewOvarlayIsVisible(state) {
      state.reviewOvarlayIsVisible = true;
    },
    reviewOvarlayIsHidden(state) {
      state.reviewOvarlayIsVisible = false;
    },
    mobileMenuOpenHandler(state) {
      state.menuIsVisible = true;
    },
    mobileMenuHiddenHandler(state) {
      state.menuIsVisible = false;
    },
    searchMenuOpenHandler(state) {
      state.searchMenuIsVisible = true;
    },
    searchMenuHiddenHandler(state) {
      state.searchMenuIsVisible = false;
    },
    accountMenuController(state, action) {
      state.accountMenu = action.payload;
    },
  },
});

export const overlayActions = ovarlaySlice.actions;

export default ovarlaySlice.reducer;
