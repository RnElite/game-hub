import { Grid, GridItem, HStack } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}


function App() {
  const [gameQuery, setGameQuery]=useState<GameQuery>({}as GameQuery);

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
          <HStack spaceX={4} marginBottom={5} >
            <PlatformSelector onSelectPlatform={(platform)=>setGameQuery({...gameQuery, platform})}/>
            <SortSelector/>
          </HStack>
          <GameGrid gameQuery={gameQuery}/>
      </GridItem>
      <GridItem bg={"gray"} area={"footer"}>Footer</GridItem>
    </Grid>
  )
} 

export default App
