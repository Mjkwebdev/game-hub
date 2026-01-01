import {  Grid, GridItem, Theme } from "@chakra-ui/react";
import Navbar from "./comp/Navbar";
function App() {
  return (

<Grid 
templateAreas={{
  base: `"nav" "main"`,
  lg: `"nav nav" "aside main"`
}}
>
  <GridItem area={"nav"}> <Navbar/> </GridItem>
  <GridItem display={{base:"none", lg:"block"}} area={"aside"} bg="pink">Aside</GridItem>
  <GridItem area={"main"} bg="dodgerblue"> Main</GridItem>
</Grid>
  );
}

export default App;
