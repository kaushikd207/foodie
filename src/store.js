import { configureStore } from "@reduxjs/toolkit";
import restaurantSliceReducer from "./components/server/restaurant.slice";
export const store = configureStore({
  reducer: {
    restaurant: restaurantSliceReducer,
  },
});
