import { HStack, Image, Text } from "@chakra-ui/react"
import Logo from "../assets/GameHub Resources/Logo/logo.webp"

const Navbar = () => {
  return (
    <HStack>
        <Image boxSize="60px" alt="Logo" src={Logo}></Image>
        <Text  fontWeight="500" fontSize="25px">Game Hub</Text>
    </HStack>
  )
}

export default Navbar