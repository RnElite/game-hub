import { HStack, Image } from "@chakra-ui/react"
import Logo from "../assets/GameHub Resources/Logo/logo.webp"
import SwitchColor from "./SwitchColor"
import SearchInput from "./SearchInput"

const Navbar = () => {
  return (
    <>
      <HStack justifyContent={'space-between'} padding='10px'>
            <Image boxSize="60px" alt="Logo" src={Logo}></Image>
            <SearchInput></SearchInput>
            <SwitchColor></SwitchColor>
      </HStack>
    </>
  )
}

export default Navbar