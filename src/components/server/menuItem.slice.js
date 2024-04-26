import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const MenuItemSlice = createSlice({
  name: "menuItem",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setMenu } = MenuItemSlice.actions;
export default MenuItemSlice.reducer;
