import { Grid, GridItem, Theme } from "@chakra-ui/react";
import Navbar from "./comp/Navbar";
import GameGrid from "./comp/GameGrid";
import "./index.css";
import GenreList from "./comp/GenreList";
import { useState } from "react";
import { Genre } from "./hook/useGenre";
import { Platform } from "./hook/hook";
import PlatformSelector from "./comp/PlatformSelector";
function App() {
  const [selectedGenre, SetSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => {
            SetSelectedGenre(genre);
          }}
        />
      </GridItem>
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => {
            setSelectedPlatform(platform);
          }}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />{" "}
      </GridItem>
    </Grid>
  );
}

export default App;
