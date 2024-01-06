import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import ApiClient, { FetchResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  background_image: string;
  description: string;
  metacritic: number;
  rating: number;
  rating_top: number;
  parent_platforms: { platform: Platform }[];
}

const apiClient = new ApiClient<Game>("/games");
const useGame = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastpage, allpages) => {
      return lastpage.next ? allpages.length + 1 : undefined;
    },
  });

export default useGame;
