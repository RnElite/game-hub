import { Platform } from '@/hooks/useGame';
import { Text } from '@chakra-ui/react';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid,  } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
interface Props{
  platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web:BsGlobe
  }
  return (
    <>
      {platforms.map((platform) => 
      <Text color={'gray'}>
        {platform.name}
      </Text>)}
    </>
  )
}

export default PlatformIconList