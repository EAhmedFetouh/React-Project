import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        {/* <Show above="lg"> */}
        <GridItem area="main">
          <GameGrid />
        </GridItem>
        {/* </Show> */}
        <GridItem area="aside">Aside</GridItem>
      </Grid>
    </>
  );
}

export default App;
