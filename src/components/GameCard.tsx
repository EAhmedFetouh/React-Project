import { Hidden } from "@mui/material";
import { Game } from "../hooks/useGame";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl" size="md">
            {game.name}
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
