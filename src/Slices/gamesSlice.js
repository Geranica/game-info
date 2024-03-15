import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  desiredGame: "",
  selectedGenre: "",
  filtersButton: false,
};

const gamesSlise = createSlice({
  name: "games",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    searchGame: (state, action) => {
      state.desiredGame = action.payload;
    },
    selectGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    toggleFiltersButton: (state) => {
      state.filtersButton = !state.filtersButton;
    },
  },
});

const { actions, reducer } = gamesSlise;

export default reducer;
export const {
  nextPage,
  searchGame,
  selectGenre,
  resetPage,
  toggleFiltersButton,
} = actions;

//selectors
export const selectPage = (state) => state.games.page;
export const selectDesiredGame = (state) => state.games.desiredGame;
export const selectSelectedGenre = (state) => state.games.selectedGenre;
export const selectFiltersButton = (state) => state.games.filtersButton;
