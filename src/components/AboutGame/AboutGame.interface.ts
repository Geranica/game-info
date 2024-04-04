export interface AboutGameProps {
  description: string | undefined;
  metacritic: number | null | undefined;
  released: string | null | undefined;
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
  website: string | undefined;
}
