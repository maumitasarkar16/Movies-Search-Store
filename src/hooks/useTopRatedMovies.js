import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

const useTopRatedMoviesList = () => {

    const dispatch = useDispatch()

    const topRatedList = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
      const json = await data.json()
  
      dispatch(addTopRatedMovies(json.results))
    }
  
    useEffect(() => {
      topRatedList();
    }, [])

}

export default useTopRatedMoviesList
