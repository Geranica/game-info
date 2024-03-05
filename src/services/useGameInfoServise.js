import { useHttp } from "../hooks/http.hook";

const useGameInfoServise = () => {
  const { request, clearError } = useHttp();

  const _apiBase = "https://api.rawg.io/api/";
  const _apiKey = "?key=53b00c09574c4413b53b51095b44e4cd";

  const getAllGames = async (page, pageSize = 12) => {
    const result = await request(
      `${_apiBase}games${_apiKey}&page=${page}&page_size=${pageSize}`
    );
    return {
      games: result.results.map((item) => _transformGame(item)),
      count: result.count,
    };
  };

  const getGame = async (id) => {
    const result = await request(`${_apiBase}games/${id}${_apiKey}`);
    return _transformGame(result);
  };

  const getGameScreenshots = async (id, page = 1, pageSize = 20) => {
    const result = await request(
      `${_apiBase}games/${id}/screenshots${_apiKey}&page=${page}&page_size=${pageSize}`
    );

    return result.results.map((item) => item.image);
  };

  const _transformGame = (game) => {
    return {
      gameName: game.name,
      background: game.background_image,
      id: game.id,
      metacritic: game.metacritic,
      description: game.description,
      released: game.released,
      website: game.website,
      platforms: game.platforms
    };
  };

  return {
    getAllGames,
    getGame,
    getGameScreenshots,
  };
};

export default useGameInfoServise;
