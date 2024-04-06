import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

const usePopularMoviesList = () => {

    const dispatch = useDispatch()

    const popularList = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
      const json = await data.json()
  
      dispatch(addPopularMovies(json.results))
    }
  
    useEffect(() => {
      popularList();
    }, [])

}

export default usePopularMoviesList
