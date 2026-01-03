import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "src/hook/hook";
import GameCard from "./GameCard";
const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      <div>
        {error && <Text> {error}</Text>}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding="10px"
          spaceX={8}
          spaceY={8}
        >
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};

export default GameGrid;
