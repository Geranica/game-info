import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  desiredGame: "",
};

const gamesSlise = createSlice({
  name: "games",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    searchGame: (state, action) => {
      state.desiredGame = action.payload;
    },
  },
});

const { actions, reducer } = gamesSlise;

export default reducer;
export const { nextPage, searchGame } = actions;

//selectors
export const selectPage = (state) => state.games.page;
export const selectDesiredGame = (state) => state.games.desiredGame;
