import { Game } from "@/hooks/useGame";
import { Card, CardBody, CardTitle, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";


interface Props{
    game: Game;
}


const GameCard = ({game}:Props) => {
  return (
    <Card.Root borderRadius={10} maxW={'sm'} overflow={'hidden'}>
        <Image  src={game.background_image}></Image>
        <CardBody>
          <CardTitle>{game.name}</CardTitle> 
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
          <HStack justifyContent='space-between'>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
    </Card.Root>
  )
}

export default GameCard