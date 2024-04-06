import React from 'react'
import {  useSelector } from 'react-redux';
import useMovieBackground from '../hooks/useMovieBackground';

const MovieBackground = ({movieId}) => {

  useMovieBackground(movieId)

  const movieBackground = useSelector((store) => store.movies?.movieBackground)

  return (
    <div className='w-screen'>  
   
      {/* <img src={ "https://image.tmdb.org/t/p/original/" + movieBackground?.backdrop_path }  alt="" /> */}

      <iframe className='w-screen aspect-video'  src={"https://www.youtube.com/embed/" + movieBackground?.key + "?&autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&modestbranding=1"} title="Official Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>

    </div>
  )
}

export default MovieBackground