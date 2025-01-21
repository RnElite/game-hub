import { HStack, Image } from "@chakra-ui/react"
import Logo from "../assets/GameHub Resources/Logo/logo.webp"
import SwitchColor from "./SwitchColor"
import SearchInput from "./SearchInput"

interface Props{
  onSearch: (searchText:string) => void
}

const Navbar = ({onSearch}:Props) => {
  return (
    <>
      <HStack justifyContent={'space-between'} padding='10px'>
            <Image boxSize="60px" alt="Logo" src={Logo}></Image>
            <SearchInput onSearch={onSearch}></SearchInput>
            <SwitchColor></SwitchColor>
      </HStack>
    </>
  )
}

export default Navbar