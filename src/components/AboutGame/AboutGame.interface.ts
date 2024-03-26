export interface AboutGameProps {
  description: string;
  metacritic: number | null;
  released: string | null;
  developers: { name: string }[];
  publishers: { name: string }[];
  genres: { name: string }[];
  platforms: {
    platform: {
      name: string;
    };
  }[];
  isLoading: boolean;
  isSuccess: boolean;
  website: string;
}
