import { Grid, GridItem, Stack } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"

function App() {
  const [selectedGenre, setSelectGenre] =useState<Genre | null>(null);
  return (
    <Grid templateAreas={{ 
      base: `"nav" "main" "footer"`,
      lg: `"nav nav" "aside main" "footer footer"`
     }}>
      <GridItem area={"nav"}>
        <Navbar></Navbar>
      </GridItem>
      <Stack hideBelow="lg">
        <GridItem paddingX={5} area={"aside"}><GenreList onSelectedGenre={(genre)=>setSelectGenre(genre)}></GenreList></GridItem>
      </Stack>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
      <GridItem bg={"gray"} area={"footer"}>Footer</GridItem>
    </Grid>
  )
} 

export default App
