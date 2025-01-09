import useGenre from "@/hooks/useGenres"
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";




const GenreList = () => {
    const {data, error, isLoading} = useGenre();
    const skeletons = [1,2,3,4,5,6];
  return (
    <Stack paddingY={10} direction={'column'}>
      {isLoading && skeletons.map((skeleton) => <GenreSkeleton key={skeleton}></GenreSkeleton>)}
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