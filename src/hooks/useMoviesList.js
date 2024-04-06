import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

const useMoviesList = () => {

    const dispatch = useDispatch()

    const movieList = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const json = await data.json()
  
      dispatch(addMovies(json.results))
    }
  
    useEffect(() => {
      movieList();
    }, [])

}

export default useMoviesList
