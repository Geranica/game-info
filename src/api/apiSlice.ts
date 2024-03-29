import { ResponceGames, Game, Screenshots } from "./apiSlice.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformGame } from "./transormResponse";
//import isEqual from "lodash/isEqual";

const _apiKey = "53b00c09574c4413b53b51095b44e4cd";

export const apiSlice = createApi({
  keepUnusedDataFor: 30 * 60,
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api",
  }),
  tagTypes: ["FilteredGames"],
  endpoints: (builder) => ({
    getGamesBySearch: builder.query({
      query: (gameName) => `/games?key=${_apiKey}&search=${gameName}`,
      transformResponse: (response: ResponceGames) => {
        return response.results.map((item) => transformGame(item));
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getGame: builder.query({
      query: (id) => `/games/${id}?key=${_apiKey}`,
      transformResponse: (response: Game) => {
        return transformGame(response);
      },
    }),
    getGameScreenshots: builder.query({
      query: (id) =>
        `/games/${id}/screenshots?key=${_apiKey}&page_size=20&page=1`,
      transformResponse: (response: Screenshots) => {
        return response.results.map((item) => item.image);
      },
    }),

    getGames: builder.query({
      query: ({ genre, page, gameTrendsFilter }) => {
        return `/games?key=${_apiKey}&ordering=${gameTrendsFilter}&page_size=18&page=${page}${genre}`;
      },
      serializeQueryArgs: ({ /* queryArgs, */ endpointName }) => {
        //return queryArgs.genre;
        return endpointName;
        //return `${queryArgs.genre}_${queryArgs.page}`;
      },
      forceRefetch({ currentArg, previousArg }) {
        //return !isEqual(currentArg, previousArg);
        return (
          currentArg.genre !== previousArg?.genre ||
          currentArg.page !== previousArg?.page ||
          currentArg.gameTrendsFilter !== previousArg?.gameTrendsFilter
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
      transformResponse: (
        response: {
          results: [];
          count: number;
        } /* , queryApi, */ /* extraOptions */
      ) => {
        return {
          games: response.results.map((item) => transformGame(item)),
          count: response.count,
        };
      },
      // @ts-expect-error
      invalidatesTags: ["FilteredGames"],
    }),
    getGameAdditions: builder.query({
      query: (id) => `/games/${id}/additions?key=${_apiKey}`,
      transformResponse: (response: { results: [] }) => {
        return response.results.map((item) => transformGame(item));
      },
    }),
    getGameAchievements: builder.query({
      query: (id) => `/games/${id}/achievements?key=${_apiKey}&page_size=200`,
      transformResponse: (response: { results: [] }) => {
        const copyArr = [...response.results];
        return copyArr.sort(
          (a: { percent: string }, b: { percent: string }) =>
            +b.percent - +a.percent
        );
      },
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetGamesBySearchQuery,
  useGetGameQuery,
  useGetGameScreenshotsQuery,
  useGetGameAdditionsQuery,
  useGetGameAchievementsQuery,
  useLazyGetGameAchievementsQuery,
} = apiSlice;
