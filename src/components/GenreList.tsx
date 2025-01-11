import useGenres, { Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Link, Stack } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}:Props) => {
  const {data, error, isLoading} = useGenres();
  const skeletons = [1,2,3,4,5,6,7,8,9,10];
  return (
    <Stack>
      {isLoading && skeletons.map(skeleton =><GenreSkeleton key={skeleton}></GenreSkeleton>)}
      {data.map(genre => 
      <HStack paddingY={1} key={genre.id}>
          <Image borderRadius={8} src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize="32px" />
          <Link onClick={()=>onSelectGenre(genre)} href="#" fontSize={'lg'}>{genre.name}</Link>
      </HStack>)}
    </Stack>
  )
}

export default GenreList;

