import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {


  const allMovieListing = useSelector((store) => store.movies)
  console.log("allMovieListing===", allMovieListing)

  return (
    <div className='bg-black w-screen'>
      <div className='mt-0 md:-mt-72 relative z-30 '>
        <MovieList title={"Now Playing"} movieListing={allMovieListing?.moviesList} />
        <MovieList title={"Top Rated Movies"} movieListing={allMovieListing?.topRatedList} />
        <MovieList title={"Popular Movies"} movieListing={allMovieListing?.popularList} />
        <MovieList title={"Upcoming Movies"} movieListing={allMovieListing?.upcomingList} />
      </div>
    </div>
  )
}

export default SecondaryContainer