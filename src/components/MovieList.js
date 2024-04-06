import React, { useRef } from 'react'
import MovieCards from './MovieCards'

const MovieList = ({ title, movieListing }) => {
  const scrollElement = useRef(null);
  if (movieListing === null) return;

  const scrollLeft = () => {
    scrollElement.current.scrollLeft += 50;
  };

  const scrollRight = () => {
    scrollElement.current.scrollLeft -= 50;
  };

  return (
    <div className='movie-listing px-4'>
      <h2 className='text-white text-lg py-6'>{title}</h2>

      <div className='flex  overflow-x-scroll  no-scrollbar' ref={scrollElement}>

        <div className='flex '>
          <img className="absolute m-10 left-1 cursor-pointer h-14 w-24" src={require("../assets/left-arrow.svg").default} alt="left-arrow" onClick={scrollRight}/>
           {/* <button className='bg-green-800 h-14 w-24 absolute m-10 left-1' onClick={scrollRight}>Click</button> */}
              {
                movieListing.map(movie => <MovieCards key={movie?.id} movieId={movie?.id} movieOverview={movie?.overview} movieTitle={movie?.title} posterPath={movie?.poster_path} />)
              }
           {/* <button className='bg-red-800 h-14 w-24 absolute m-10 right-[1rem]' onClick={scrollLeft}>Click</button> */}
           <img className="absolute m-10 right-[1rem] cursor-pointer h-14 w-24" src={require("../assets/right-arrow.svg").default} alt="right-arrow" onClick={scrollLeft}/> 
        </div>

      </div>



    </div>
  )
}

export default MovieList