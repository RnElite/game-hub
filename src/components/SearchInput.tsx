import { Input, Kbd } from "@chakra-ui/react"
import { InputGroup } from "@/components/ui/input-group"
import { LuSearch } from "react-icons/lu"
import { useState } from "react"

const SearchInput = () => {
  return (
        <InputGroup paddingLeft={{ lg:40 }} flex={1} startElement={<LuSearch />} endElement={<Kbd hideBelow={'lg'}>⌘K</Kbd>}>
            <Input placeholder="Search contacts" />
        </InputGroup>
  )
}

export default SearchInput