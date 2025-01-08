import useGame, { Game } from "@/hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";



const GameGrid = () => {
    const {data, error, isLoading } = useGame();
    const skeletons = [1,2,3,4,5,6];
  return (

    <>
        {error&&<Text>{error}</Text>}
        <SimpleGrid padding={10} columns={{ sm:1, md:2, lg:3, xl:5 }} gap={5}>
          {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}></GameCardSkeleton>)}
          {data.map(game=>
          <GameCard key={game.id} game={game}></GameCard>)}
        </SimpleGrid>
    </>
    
  )
}

export default GameGrid

