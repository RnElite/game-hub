"use client"

import { Button } from "@/components/ui/button"
import {
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"
import usePlatforms from "@/hooks/usePlatforms"
import { Text } from "@chakra-ui/react"
import { useState } from "react"
import { BsChevronBarDown } from "react-icons/bs"
import ArrowUpDown from "./Icons-Animations/ArrowUpDown"

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const [value, setValue] = useState('All Platforms');
  if(error) return <Text>{error}</Text>
  return (
    <MenuRoot>
        <ArrowUpDown value={value}></ArrowUpDown>
      <MenuContent minW="10rem">
        <MenuRadioItemGroup value={value} onValueChange={(e) => setValue(e.value)}>
            {data.map(platform => <MenuRadioItem key={platform.id} value={platform.name}>{platform.name}</MenuRadioItem>)}
        </MenuRadioItemGroup>
      </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector