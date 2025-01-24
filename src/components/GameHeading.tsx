import { GameQuery } from "@/App"
import { Heading } from "@chakra-ui/react"

interface Props{
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}:Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <Heading marginBottom={3} size={'4xl'}>{heading}</Heading>
  )
}

export default GameHeading