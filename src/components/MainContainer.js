import React from 'react'
import MovieTitle from './MovieTitle'
import { useSelector } from 'react-redux';
import MovieBackground from './MovieBackground'
import { FilteredMovieContext } from '../contexts/FilteredMovieContext';

const MainContainer = () => {

  const movieList = useSelector((store) => store.movies?.moviesList) //fetching from store

  if (movieList === null) return;

  const filteredMovie = movieList[8];

  return (
    <div className=''>
      <FilteredMovieContext.Provider value={{ filteredMovie }}>
        <div className="w-screen aspect-video pt-[15%] px-6 absolute bg-gradient-to-r from-black"><MovieTitle movieTitle={filteredMovie.title} movieOverview={filteredMovie.overview} moviePoster={filteredMovie.poster_path} /></div>
        <div className=''><MovieBackground movieId={filteredMovie.id} /></div>
      </FilteredMovieContext.Provider>
    </div>
  )
}

export default MainContainer