import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  page: 1,
};

const developersSlise = createSlice({
  name: "developers",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
  },
});

const { actions, reducer } = developersSlise;

export default reducer;
export const {
  nextPage,
} = actions;

//selectors

export const selectPage = (state: RootState) => state.developers.page;