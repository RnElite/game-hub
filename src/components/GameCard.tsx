import { Game } from "@/hooks/useGame";
import { Card, CardBody, CardTitle, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";


interface Props{
    game: Game;
}


const GameCard = ({game}:Props) => {
  return (
    <Card.Root borderRadius={10} maxW={'sm'} overflow={'hidden'}>
        <Image  src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <CardTitle>{game.name}</CardTitle> 
          <HStack justifyContent='space-between' paddingY={3}>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
    </Card.Root>
  )
}

export default GameCard