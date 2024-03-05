import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

const gamesSlise = createSlice({
  name: "games",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
  },
});

const { actions, reducer } = gamesSlise;

export default reducer;
export const { nextPage } = actions;

//selectors
export const selectPage = (state) => state.games.page;
