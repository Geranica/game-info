import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformGame } from "./transormResponse";
import isEqual from "lodash/isEqual";

const _apiKey = "53b00c09574c4413b53b51095b44e4cd";

export const apiSlice = createApi({
  keepUnusedDataFor: 30 * 60,
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api",
  }),
  tagTypes: ["FilteredGames"],
  endpoints: (builder) => ({
    /*  getGames: builder.query({
      query: (page, pageSize = 12) =>
        `/games?key=${_apiKey}&page=${page}&page_size=${pageSize}`,
      transformResponse: (response) => {
        return {
          games: response.results.map((item) => transformGame(item)),
          count: response.count,
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        return {
          games: [...currentCache.games, ...newItems.games],
          count: newItems.count,
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }), */
    getGamesBySearch: builder.query({
      query: (gameName) => `/games?key=${_apiKey}&search=${gameName}`,
      transformResponse: (response) => {
        return response.results.map((item) => transformGame(item));
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getGame: builder.query({
      query: (id) => `/games/${id}?key=${_apiKey}`,
      transformResponse: (response) => {
        return transformGame(response);
      },
    }),
    getGameScreenshots: builder.query({
      query: (id) =>
        `/games/${id}/screenshots?key=${_apiKey}&page_size=20&page=1`,
      transformResponse: (response) => {
        return response.results.map((item) => item.image);
      },
    }),

    getGames: builder.query({
      query: ({ genre, page }) => {
        return `/games?key=${_apiKey}&ordering=-rating&page_size=18&page=${page}${genre}`;
      },
      serializeQueryArgs: ({ queryArgs, endpointName }) => {
        //return queryArgs.genre;
        return endpointName;
        //return `${queryArgs.genre}_${queryArgs.page}`;
      },
      forceRefetch({ currentArg, previousArg }) {
        //return !isEqual(currentArg, previousArg);
        return (
          currentArg.genre !== previousArg?.genre ||
          currentArg.page !== previousArg?.page
        );
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg.page === 1) {
          return newItems;
        }
        return {
          games: [...currentCache.games, ...newItems.games],
          count: newItems.count,
        };
      },
      transformResponse: (response, queryApi, extraOptions) => {
        return {
          games: response.results.map((item) => transformGame(item)),
          count: response.count,
        };
      },
      invalidatesTags: ["FilteredGames"],
    }),
  }),
});

console.log(apiSlice);
export const {
  useGetGamesQuery,
  useGetGamesBySearchQuery,
  useGetGameQuery,
  useGetGameScreenshotsQuery,
} = apiSlice;
