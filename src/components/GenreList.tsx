import useGenres, { Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { Heading, HStack, Image, Link, Stack } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}:Props) => {
  const {data, error, isLoading} = useGenres();
  const skeletons = [1,2,3,4,5,6,7,8,9,10];
  return (
    <>
      <Heading size={'2xl'} marginBottom={3}>Genres</Heading>
      <Stack>
        {isLoading && skeletons.map(skeleton =><GenreSkeleton key={skeleton}></GenreSkeleton>)}
        {data.map(genre => 
        <HStack paddingY={1} key={genre.id}>
            <Image objectFit={'cover'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize="32px" />
            <Link whiteSpace={'normal'} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={()=>onSelectGenre(genre)} href="#" fontSize={'lg'}>{genre.name}</Link>
        </HStack>)}
      </Stack>
    </>
  )
}

export default GenreList;

