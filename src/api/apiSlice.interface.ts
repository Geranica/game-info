interface Developer {
  name: string;
}

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
  developers: Developer[];
  publishers: Publisher[];
}
