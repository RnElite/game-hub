import { Platform } from '@/hooks/useGame';
import { HStack, Image } from '@chakra-ui/react';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid,  } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from 'react-icons';
interface Props{
  platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
  const iconMap: {[key:string]:IconType} =  {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web:BsGlobe,
    android: FaAndroid
  }
  return (
    <HStack>
      {platforms.map((platform) => 
      <Image key={platform.id} boxSize={5} as={iconMap[platform.slug]} color={'gray'}>
          {platform.name}
      </Image>)}
    </HStack>
  )
}

export default PlatformIconList