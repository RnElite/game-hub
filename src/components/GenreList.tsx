import useGenre from "@/hooks/useGenres"
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Stack, Text } from "@chakra-ui/react";


const GenreList = () => {
    const {data} = useGenre();
  return (
    <Stack paddingY={10} direction={'column'}>
      {data.map((genre)=>(
          <HStack paddingY={1} key={genre.id}>
            <Image borderRadius={8} boxSize={10} src={getCroppedImageUrl(genre.image_background)}/>
            <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack>
      ))}
    </Stack>
  )
}

export default GenreList