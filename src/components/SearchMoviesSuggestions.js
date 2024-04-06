import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SearchMoviesSuggestions = () => {

  const moviesNames = useSelector(store => store.searchMovies.movieSearchNamesFromOpenAi)
  const moviesResults = useSelector(store => store.searchMovies.movieSearchResultsFromTmtb)
 
  if(!moviesNames) return;

  return (
    <div className='bg-black opacity-90'>
      {moviesNames.map( (movieName, index) => <MovieList key={movieName} title={movieName} movieListing={moviesResults[index]} /> )}
    </div>
  )
}

export default SearchMoviesSuggestions