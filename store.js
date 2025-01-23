import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./favourite";

const store = configureStore({
  reducer: {
    favouriteCompanion: favouriteSlice,
  },
});

export default store;
