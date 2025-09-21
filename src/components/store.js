import { configureStore } from "@reduxjs/toolkit";
import venueReducer from "./Venue";
import avReducer from "./av";
import mealsReducer from "./Meal";

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer,
  },
});