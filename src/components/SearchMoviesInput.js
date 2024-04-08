import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/LangConstants';
import openai from '../utils/openAi';
import { useRef } from 'react';
import { API_OPTIONS } from '../utils/constant';
import { searchMovies, updateShowLoader } from '../utils/searchMoviesSlice';
import Spinner from './Spinner'

const SearchMoviesInput = () => {
  const movieInput = useRef(null)
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.languageSearch.lang);
  const showLoader = useSelector(store => store.searchMovies.showLoader)
  
  const [error, setError] = useState(null)


  const handleSearchClick = async () => {

    const movieSearchTextInput = movieInput.current.value;
    if (!movieSearchTextInput) {
      setError("This is a required field")
      return;
    }
    setError(null);

    dispatch(updateShowLoader(true));

    const queryStringForOpenAi = "Act like a movie recommendation system. Show top 10 movies." + movieSearchTextInput + ". Show just like the example below: Fighter, Animal, Dunki, Pathaan, Godzilla vs Kong.";


    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: queryStringForOpenAi }],
      model: 'gpt-3.5-turbo',
    });

    //console.log(completion.choices)
    //console.log(completion.choices?.[0]?.message?.content)

    if (!completion.choices) return;

    const completionArray = completion.choices?.[0]?.message?.content.split("\n");
    //console.log("completionArray \n",completionArray);

    const updArray = completionArray.map(movie => movie.split(".")[1].trim())
   //console.log("updArray",updArray)

    const promiseArray = updArray.map(movie => searchMovieInTmdb(movie))

    const tmdbResults = await Promise.all(promiseArray)
    console.log(tmdbResults)

    if(tmdbResults) {
      dispatch(updateShowLoader(false));
    }
    dispatch(searchMovies({movieSearchNamesFromOpenAi: updArray , movieSearchResultsFromTmtb: tmdbResults}))

  }

  const searchMovieInTmdb = async (movie) => {

    const data = await fetch( "https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    //console.log(json.results)
    return json.results;

  }


  return (
    // <div className="pt-[35%] flex justify-center "> 
     <div className='w-full pt-[55%] md:w-1/2 md:pt-[15%] my-2 mx-auto'> 
      <form className='grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input className='col-span-9 border border-gray-700 p-2' ref={movieInput} id="movieLookupInput" name="movieLookupInput" type="text" placeholder={lang[langKey].searchPlaceholder} />
        <button type="submit" className='bg-red-700 rounded-sm text-white col-span-3 p-2 my-0 mx-1' onClick={handleSearchClick}>{lang[langKey].searchBtn}</button>
      </form>
      <div className='text-white font-bold '>{error}</div>
      <div className=' bg-black opacity-75'>
        {showLoader ? <Spinner /> : null}
      </div>
    </div>
  )
}

export default SearchMoviesInput