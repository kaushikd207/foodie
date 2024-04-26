import { configureStore } from "@reduxjs/toolkit";
import restaurantSliceReducer from "./components/server/restaurant.slice";
import menuItemSliceReducer from "./components/server/menuItem.slice";
export const store = configureStore({
  reducer: {
    restaurant: restaurantSliceReducer,
    menuItem: menuItemSliceReducer,
  },
});
