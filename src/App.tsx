import { Grid, GridItem } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}


function App() {
  const [gameQuery, setGameQuery]=useState<GameQuery>({}as GameQuery);
  const [selectedGenre, setSetselectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform]=useState<Platform | null>(null);
  return (
    <Grid templateAreas={{ 
      base: `"nav" "main" "footer"`,
      lg: `"nav nav" "aside main" "footer footer"`
     }}>
      <GridItem area={"nav"}>
        <Navbar></Navbar>
      </GridItem>
      <GridItem paddingX={4} area={"aside"}>
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=> setGameQuery({...gameQuery, genre})}></GenreList>
      </GridItem>
      <GridItem area={"main"}>
        <PlatformSelector onSelectPlatform={(platform)=>setGameQuery({...gameQuery, platform})}></PlatformSelector>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
      <GridItem bg={"gray"} area={"footer"}>Footer</GridItem>
    </Grid>
  )
} 

export default App
