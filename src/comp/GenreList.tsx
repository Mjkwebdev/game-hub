import { Button, HStack, Image, List, Text } from "@chakra-ui/react";
import React from "react";
import useData from "src/hook/useData";
import { Genre } from "src/hook/useGenre";
import getCroppedImageUrl from "src/services/image-url";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data } = useData<Genre>("/genres");
  return (
    <List.Root>
      {data.map((genr) => (
        <List.Item key={genr.id} listStyleType="none" padding={1}>
          {" "}
          <HStack>
            {" "}
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genr.image_background)}
            />
            <Button
              fontWeight={genr.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => {
                onSelectGenre(genr);
              }}
              font="lg"
              variant={"ghost"}
            >
              {" "}
              {genr.name}{" "}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
