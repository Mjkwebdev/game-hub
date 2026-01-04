import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "src/hook/hook";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const Skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div>
        {error && <Text> {error}</Text>}
        <SimpleGrid
          columns={{ sm: 1, md: 3, lg: 3, xl: 4 }}
          padding="10px"
          spaceX={8}
          spaceY={8}
        >
          {isLoading && Skeleton.map((Sk) => <GameCardSkeleton key={Sk} />)}
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};

export default GameGrid;
