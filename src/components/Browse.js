import React from 'react'
import Header from './Header'
import useMoviesList from '../hooks/useMoviesList'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {

  useMoviesList();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse