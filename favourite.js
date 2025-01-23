import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [], // Array to store favorite IDs
  },
  reducers: {
    addFavorite: (state, action) => {
      // Add the ID if it's not already in the array
      if (!state.ids.includes(action.payload.id)) {
        state.ids.push(action.payload.id);
      }
    },
    removeFavorite: (state, action) => {
      // Remove the ID only if it exists in the array
      const index = state.ids.indexOf(action.payload.id);
      if (index !== -1) {
        state.ids.splice(index, 1);
      }
    },
  },
});

// Export actions
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

// Export reducer
export default favoritesSlice.reducer;
