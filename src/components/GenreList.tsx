import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCoroppedUmageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCoroppedUmageUrl(genre.image_background)}
            />

            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
