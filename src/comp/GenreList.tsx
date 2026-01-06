import { HStack, Image, List, Text } from "@chakra-ui/react";
import React from "react";
import useData from "src/hook/useData";
import { Genre } from "src/hook/useGenre";
import getCroppedImageUrl from "src/services/image-url";
const GenreList = () => {
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
            <Text font="lg"> {genr.name} </Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
