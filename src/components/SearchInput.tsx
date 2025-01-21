import { Input, Kbd } from "@chakra-ui/react"
import { InputGroup } from "@/components/ui/input-group"
import { LuSearch } from "react-icons/lu"
import { useRef } from "react"
import {} from "../index.css"


interface Props{
  onSearch: (searchText:string) => void
}


const SearchInput = ({onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null);
  
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value);
    }}>
          <InputGroup className="searchInput" paddingLeft={{ lg:'11rem' }} flex={1} startElement={<LuSearch />} endElement={<Kbd hideBelow={'lg'}>⌘K</Kbd>}>
              <Input ref={ref} placeholder="Search contacts" />
          </InputGroup>
        </form>
  )
}

export default SearchInput