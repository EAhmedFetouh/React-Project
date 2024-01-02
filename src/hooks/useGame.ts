import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGame = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genre: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGame;
