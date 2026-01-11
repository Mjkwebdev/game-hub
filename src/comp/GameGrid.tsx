import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "src/hook/hook";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "src/hook/useGenre";
import PlatformSelector from "./PlatformSelector";
import { GameQuery } from "src/App";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <div>
        {error && <Text> {error}</Text>}{" "}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding="13px"
          spaceX={5}
          spaceY={5}
        >
          {isLoading &&
            Skeleton.map((Skeleton) => (
              <GameCardContainer key={Skeleton}>
                {" "}
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};

export default GameGrid;
