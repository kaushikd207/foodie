import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurantList: {},
};
export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.restaurantList = action.payload;
    },
  },
});

export const { setRestaurants } = RestaurantSlice.actions;
export default RestaurantSlice.reducer;
