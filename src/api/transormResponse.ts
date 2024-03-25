import { Game } from "./apiSlice.interface";

export const transformGame = (game: Game) => {
  return {
    gameName: game.name,
    background: game.background_image,
    id: game.id,
    metacritic: game.metacritic,
    description: game.description,
    released: game.released,
    website: game.website,
    platforms: game.platforms,
    genres: game.genres,
    developers: game.developers,
    publishers: game.publishers,
  };
};
