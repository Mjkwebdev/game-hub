import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "src/hook/hook";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div>
        {error && <Text> {error}</Text>}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding="13px"
          spaceX={5}
          spaceY={5}
        >
          {isLoading &&
            Skeleton.map((Sk) => (
              <GameCardContainer>
                {" "}
                <GameCardSkeleton key={Sk} />
              </GameCardContainer>
            ))}
          {data.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};

export default GameGrid;
