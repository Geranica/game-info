import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const _apiKey = "53b00c09574c4413b53b51095b44e4cd";
const _transformGame = (game) => {
  return {
    gameName: game.name,
    background: game.background_image,
    id: game.id,
    metacritic: game.metacritic,
    description: game.description,
    released: game.released,
    website: game.website,
    platforms: game.platforms,
  };
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api",
  }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: (page, pageSize = 12) =>
        `/games?key=${_apiKey}&page=${page}&page_size=${pageSize}`,
      transformResponse: (response) => {
        return {
          games: response.results.map((item) => _transformGame(item)),
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
    }),
  }),
});

export const { useGetGamesQuery } = apiSlice;
