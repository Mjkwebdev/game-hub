import { Grid, GridItem, Theme } from "@chakra-ui/react";
import Navbar from "./comp/Navbar";
import GameGrid from "./comp/GameGrid";
import "./index.css";
import GenreList from "./comp/GenreList";
function App() {
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
        <GenreList />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid />{" "}
      </GridItem>
    </Grid>
  );
}

export default App;
