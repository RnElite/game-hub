import useGenre from "@/hooks/useGenres"


const GenreList = () => {
    const {data} = useGenre();
  return (
    <ul>
        {data.map(genres => <li key={genres.id}>{genres.name}</li>)}
    </ul>
  )
}

export default GenreList