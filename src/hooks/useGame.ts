import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  background_image: string;
  description: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

const useGame = () => useData<Game>("/games");

export default useGame;
