import React, { useState } from 'react';
import { API_OPTIONS, POSTER_PATH } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { movieListTrailer } from '../utils/moviesSlice';
import ShowPopUpTrailer from './ShowPopUpTrailer';

const MovieCards = ({movieId, movieOverview, movieTitle, posterPath}) => {

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false)


  if(!posterPath) return;

  const handleImagePopUp = async () => {
    setShowModal(true)
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_OPTIONS)
    const json = await data.json();
    //console.log(json)
    const trailerVideo = json.results.filter( movie => movie.type === "Trailer")
    //console.log(trailerVideo[0])
    dispatch(movieListTrailer(trailerVideo[0]));
  }

  return (
    <div className='w-40 pr-4'>
        <img src={ POSTER_PATH + posterPath } alt="all movies" className='hover:scale-110 cursor-pointer' onClick={handleImagePopUp} />

        {showModal ? (<ShowPopUpTrailer movieOverview={movieOverview} movieTitle={movieTitle} closeModalChild={() => setShowModal(false)} />) : null}  
    </div>
  )
}

export default MovieCards