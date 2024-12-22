import { Game } from "@/hooks/useGame";
import { Card, CardBody, CardTitle, Image } from "@chakra-ui/react";


interface Props{
    game: Game;
}

const GameCard = ({game}:Props) => {
  return (
    <Card.Root borderRadius={10} maxW={'sm'} overflow={'hidden'}>
        <Image  src={game.background_image}></Image>
        <CardBody>
            <CardTitle>{game.name}</CardTitle>
        </CardBody>
    </Card.Root>
  )
}

export default GameCard