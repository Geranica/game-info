interface Publisher {
  name: string;
}

interface Platform {
  platform: {
    name: string;
  };
}

interface Genre {
  name: string;
}

interface Image {
  image: string;
}
export interface Screenshots {
  results: Image[];
}
export interface ResponceGames {
  results: [];
}

export interface Game {
  name: string;
  background_image: string;
  id: number;
  metacritic: number;
  description: string;
  released: string;
  website: string;
  platforms: Platform[];
  genres: Genre[];
  developers: { name: string }[];
  publishers: Publisher[];
}

export interface Developer {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: object[];
}
