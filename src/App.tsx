import {  Grid, GridItem, Theme } from "@chakra-ui/react";
import Navbar from "./comp/Navbar";
import ColorModeSwitcher from "./comp/ColorModeSwitch";
function App() {
  return (
<Grid 
templateAreas={{
  base: `"nav" "main"`,
  lg: `"nav nav" "aside main"`
}}
>
  <GridItem area={"nav"}> <Navbar/> </GridItem>
  <GridItem display={{base:"none", lg:"block"}} area={"aside"}>Aside</GridItem>
  <GridItem area={"main"}> Main</GridItem>
</Grid>
  );
}

export default App;
