import { Grid, GridItem, Stack } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

function App() {
  return (
    <Grid templateAreas={{ 
      base: `"nav" "main" "footer"`,
      lg: `"nav nav" "aside main" "footer footer"`
     }}>
      <GridItem area={"nav"}>
        <Navbar></Navbar>
      </GridItem>
      <Stack hideBelow="lg">
        <GridItem area={"aside"}><GenreList></GenreList></GridItem>
      </Stack>
      <GridItem area={"main"}>
        <GameGrid></GameGrid>
      </GridItem>
      <GridItem bg={"gray"} area={"footer"}>Footer</GridItem>
    </Grid>
  )
} 

export default App
