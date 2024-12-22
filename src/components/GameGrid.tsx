import useGame from "@/hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";


const GameGrid = () => {
    const {games, error} = useGame();
  return (

    <>
        {error&&<Text>{error}</Text>}
        <SimpleGrid padding={10} columns={{ sm:1, md:2, lg:3, xl:5 }} gap={5}>
            {games.map(game=>
            <GameCard key={game.id} game={game}></GameCard>)}
        </SimpleGrid>
    </>
    
  )
}

export default GameGrid

