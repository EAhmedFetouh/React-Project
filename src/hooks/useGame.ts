import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

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

const useGame = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGame;
