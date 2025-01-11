import { Grid, GridItem } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react";
import { Genre } from "./hooks/useGenre";

function App() {
  const [selectedGenre, setSetselectedGenre] = useState<Genre | null>(null);
  return (
    <Grid templateAreas={{ 
      base: `"nav" "main" "footer"`,
      lg: `"nav nav" "aside main" "footer footer"`
     }}>
      <GridItem area={"nav"}>
        <Navbar></Navbar>
      </GridItem>
      <GridItem paddingX={4} area={"aside"}>
        <GenreList onSelectGenre={(genre)=> setSetselectedGenre(genre)}></GenreList>
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
      <GridItem bg={"gray"} area={"footer"}>Footer</GridItem>
    </Grid>
  )
} 

export default App
