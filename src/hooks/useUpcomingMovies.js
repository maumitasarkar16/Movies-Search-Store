import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

const useUpcomingMoviesList = () => {

    const dispatch = useDispatch()

    const upcomingList = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      const json = await data.json()
  
      dispatch(addUpcomingMovies(json.results))
    }
  
    useEffect(() => {
      upcomingList();
    }, [])

}

export default useUpcomingMoviesList
