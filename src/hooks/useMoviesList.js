import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

const useMoviesList = () => {

    const dispatch = useDispatch()
    const trendingMovieList = useSelector(store => store.movies?.moviesList)

    const movieList = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const json = await data.json()
  
      dispatch(addMovies(json.results))
    }
  
    useEffect(() => {
      if(!trendingMovieList){   // memoisation
        movieList();
      }
     
    }, [])

}

export default useMoviesList
