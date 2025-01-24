import bullsEye from '../assets/Emojis/bulls-eye.webp'
import thumbsup from '../assets/Emojis/thumbs-up.webp'
import meh from '../assets/Emojis/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react';


interface Props{
    rating: number;
}

const Emoji = ({rating}:Props) => {
    if(rating < 3 ) return null;
    const emojiMaps: {[key:number]:ImageProps} = {
        3:{src: meh, alt: 'meh', },
        4:{src: thumbsup, alt: 'recommendation', },
        5:{src: bullsEye, alt: 'exceptional', },
    }
  return (
    <Image {...emojiMaps[rating]} boxSize={8}/>
  )
}

export default Emoji