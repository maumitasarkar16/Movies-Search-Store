import React from 'react'
import MovieTitle from './MovieTitle'
import { useSelector } from 'react-redux';
import MovieBackground from './MovieBackground'

const MainContainer = () => {

  const movieList = useSelector((store) => store.movies?.moviesList) //fetching from store
  console.log("movieList==", movieList);

  if (movieList === null) return;

  const filteredMovie = movieList[8];
  console.log("filteredMovie===", filteredMovie)

  return (
    <div className=''>
        <div className="w-screen aspect-video pt-[15%] px-6 absolute bg-gradient-to-r from-black"><MovieTitle movieTitle={filteredMovie.title} movieOverview={filteredMovie.overview} /></div>
        <div className=''><MovieBackground movieId={filteredMovie.id} /></div>
    </div>
  )
}

export default MainContainer