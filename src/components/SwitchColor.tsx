import { Icon } from "@chakra-ui/react"
import { Switch } from "@/components/ui/switch"
import { FaMoon, FaSun } from "react-icons/fa"
import { useColorMode } from "./ui/color-mode"

const SwitchColor = () => {
    const {toggleColorMode, colorMode} = useColorMode();
  return (
    <Switch marginRight={10} checked={colorMode === 'dark'} onChange={toggleColorMode}
      colorPalette="blue"
      size="lg"
      trackLabel={{
        on: (
          <Icon color="yellow.400">
            <FaSun />
          </Icon>
        ),
        off: (
          <Icon color="blue.400">
            <FaMoon />
          </Icon>
        ),
      }}
    />
  )
}

export default SwitchColor