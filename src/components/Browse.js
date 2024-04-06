import React from 'react'
import Header from './Header'
import useMoviesList from '../hooks/useMoviesList'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import usePopularMoviesList from '../hooks/usePopularMoviesList';
import useUpcomingMoviesList from '../hooks/useUpcomingMovies';
import useTopRatedMoviesList from '../hooks/useTopRatedMovies';
import SearchMovies from './SearchMovies';
import { useSelector } from 'react-redux';


const Browse = () => {

  const isSearchPage = useSelector((store) => store.searchMovies.showSearchPage)

  useMoviesList();
  usePopularMoviesList();
  useUpcomingMoviesList();
  useTopRatedMoviesList();

  return (
    <div>
      <Header />
      {isSearchPage ? <SearchMovies /> : <> <MainContainer /><SecondaryContainer /></>}

    </div>
  )
}

export default Browse