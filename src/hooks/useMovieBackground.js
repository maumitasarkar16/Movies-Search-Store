import { addMovieBackground } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';

const useMovieBackground = (movieId) => {
 
    const dispatch = useDispatch();

    const nowPlayingMovies = async () => {
    
      //const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId, API_OPTIONS)
      const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos' , API_OPTIONS)
      
      const json = await data.json();
    
      //const backdrop_path =  json.backdrop_path //can  not access this directly. Store it in redux or use state variables
      const trailerData = json.results.filter(item => item.type === "Trailer")
      const finalTrailer = trailerData[0];
      dispatch(addMovieBackground(finalTrailer))
     } 
  
     useEffect(() => {
      nowPlayingMovies();
     }, [])

}
export default useMovieBackground