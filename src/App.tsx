import { Grid, GridItem, HStack, Theme } from "@chakra-ui/react";
import Navbar from "./comp/Navbar";
import GameGrid from "./comp/GameGrid";
import "./index.css";
import GenreList from "./comp/GenreList";
import { useState } from "react";
import { Genre } from "./hook/useGenre";
import { Platform } from "./hook/hook";
import PlatformSelector from "./comp/PlatformSelector";
import SortSelector from "./comp/SortSelector";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        {" "}
        <Navbar />{" "}
      </GridItem>
      <GridItem display={{ base: "none", lg: "block" }} area={"aside"}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => {
            setGameQuery({ ...gameQuery, genre });
          }}
        />
      </GridItem>
      <GridItem area={"main"}>
        <HStack paddingLeft={2}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => {
              setGameQuery({ ...gameQuery, platform });
            }}
          />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />{" "}
      </GridItem>
    </Grid>
  );
}

export default App;
