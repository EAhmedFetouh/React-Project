import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const head = `${platform?.name || ""}  ${genre?.name || ""}    Games `;

  return (
    <Heading as="h1" marginBottom={5} mx={7}>
      {head}
    </Heading>
  );
};

export default GameHeading;
