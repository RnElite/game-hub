import { Button } from "@/components/ui/button"
import {
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
} from "@/components/ui/menu"
import { useState } from "react"
import ArrowUpDown from "./Icons-Animations/ArrowUpDown"



const SortSelector = () => {
    const [value, setValue] = useState("Order By Relevant: Descending")
    return (
      <MenuRoot>
        <ArrowUpDown value={value} />
        <MenuContent minW="10rem">
          <MenuRadioItemGroup
            value={value}
            onValueChange={(e) => setValue(e.value)}
          >
            <MenuRadioItem value="asc">Ascending</MenuRadioItem>
            <MenuRadioItem value="desc">Descending</MenuRadioItem>
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuRoot>
    )
}

export default SortSelector