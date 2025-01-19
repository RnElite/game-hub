import useGame, {  } from "@/hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "@/App";


interface Props{
  gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}:Props) => {
    const {data, error, isLoading } = useGame(gameQuery);
    const skeletons = [1,2,3,4,5,6,7,8,9,10];
    if (error) return <Text>{error}</Text>
  return (

    <>
        <SimpleGrid marginRight={{ lg:10, xl:10 }} columns={{ sm:1, md:2, lg:3, xl:4 }} gap={4}>
          {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}></GameCardSkeleton>)}
          {data.map(game=>
          <GameCard key={game.id} game={game}></GameCard>)}
        </SimpleGrid>
    </>
    
  )
}

export default GameGrid

