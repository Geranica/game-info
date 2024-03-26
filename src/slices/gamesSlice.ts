import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  page: 1,
  desiredGame: "",
  selectedGenre: "",
  filtersButton: false,
  selectedGameTrendsFilter: "-rating",
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
    resetDesiredGame: (state) => {
      state.desiredGame = "";
    },
    selectGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    toggleFiltersButton: (state) => {
      state.filtersButton = !state.filtersButton;
    },
    selectGameTrendsFilter: (state, action) => {
      state.selectedGameTrendsFilter = action.payload;
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
  selectGameTrendsFilter,
  resetDesiredGame,
} = actions;

//selectors
export const selectPage = (state: RootState) => state.games.page;
export const selectDesiredGame = (state: RootState) => state.games.desiredGame;
export const selectSelectedGenre = (state: RootState) =>
  state.games.selectedGenre;
export const selectFiltersButton = (state: RootState) =>
  state.games.filtersButton;
export const selectSelectedGameTrendsFilter = (state: RootState) =>
  state.games.selectedGameTrendsFilter;
