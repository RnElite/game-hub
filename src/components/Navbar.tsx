import { HStack, Image } from "@chakra-ui/react"
import Logo from "../assets/GameHub Resources/Logo/logo.webp"
import { ColorModeButton } from "./ui/color-mode"

const Navbar = () => {
  return (
    <>
      <HStack justifyContent={'space-between'} padding='10px'>
            <Image boxSize="60px" alt="Logo" src={Logo}></Image>
            <ColorModeButton></ColorModeButton>
      </HStack>
    </>
  )
}

export default Navbar