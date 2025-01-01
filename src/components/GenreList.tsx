
import useGenre from "@/hooks/useGenres"
import { useState } from "react"


const GenreList = () => {
    const {genres} = useGenre();
  return (
    <ul>
        {genres.map(genres => <li key={genres.id}>{genres.name}</li>)}
    </ul>
  )
}

export default GenreList