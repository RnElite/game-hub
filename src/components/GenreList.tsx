import useGenre from "@/hooks/useGenres"
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Link, Spinner, Stack } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

interface Props{
  onSelectedGenre: (genre: any) => void;
}

const GenreList = ({onSelectedGenre}:Props) => {
    const {data, error, isLoading} = useGenre();
    const skeletons = [1,2,3,4,5,6];
    if (error) {return null}
    if(isLoading){return <Spinner/>}
  return (
    <Stack paddingY={10} direction={'column'}>
      {isLoading && skeletons.map((skeleton) => <GenreSkeleton key={skeleton}></GenreSkeleton>)}
      {data.map((genre)=>(
        <HStack paddingY={1} key={genre.id}>
            <Image borderRadius={8} boxSize={10} src={getCroppedImageUrl(genre.image_background)}/>
            <Link onClick={()=> onSelectedGenre(genre)} href={'link'} fontSize={'lg'}>{genre.name}</Link>
          </HStack>
      ))}
    </Stack>
  )
}

export default GenreList