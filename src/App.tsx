import { Grid, GridItem, Stack } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"

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
        <GridItem bg={"blue"} area={"aside"}>SideBar</GridItem>
      </Stack>
      <GridItem area={"main"}>
        <GameGrid></GameGrid>
      </GridItem>
      <GridItem bg={"gray"} area={"footer"}>Footer</GridItem>
    </Grid>
  )
} 

export default App
