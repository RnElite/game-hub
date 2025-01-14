"use client"

import {
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
} from "@/components/ui/menu"
import usePlatforms from "@/hooks/usePlatforms"
import { Text } from "@chakra-ui/react"
import { useState } from "react"
import ArrowUpDown from "./Icons-Animations/ArrowUpDown"
import { Platform } from "@/hooks/useGame"


interface Props{
  onSelectPlatform: (platform: Platform) => void
}


const PlatformSelector = ({onSelectPlatform}:Props) => {
  const { data, error } = usePlatforms();
  const [value, setValue] = useState('All Platforms');
  if(error) return <Text>{error}</Text>
  return (
    <MenuRoot>
        <ArrowUpDown value={value}></ArrowUpDown>
      <MenuContent minW="10rem">
        <MenuRadioItemGroup value={value} onValueChange={(e) => setValue(e.value)}>
            {data.map(platform => <MenuRadioItem onClick={()=>onSelectPlatform(platform)} key={platform.id} value={platform.name}>{platform.name}</MenuRadioItem>)}
        </MenuRadioItemGroup>
      </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector