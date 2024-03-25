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
export interface AboutGameProps {
  description: string;
  metacritic: number | null;
  released: string | null;
  developers: Developer[];
  publishers: Publisher[];
  genres: Genre[];
  platforms: Platform[];
  isLoading: boolean;
  isSuccess: boolean;
  website: string;
}
