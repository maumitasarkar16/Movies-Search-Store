import React from 'react';
import { POSTER_PATH } from '../utils/constant';
import { useContext } from 'react';
import { FilteredMovieContext } from '../contexts/FilteredMovieContext';

// const ShowInfoModal = ({ closeModalChild, movieOverview, movieTitle ,moviePoster }) => {

const ShowInfoModal = ({ closeModalChild }) => {    

    const modalInfo = useContext(FilteredMovieContext)
    //console.log("title",   modalInfo.filteredMovie.title    )

    const closeModalHandle = () => {
        closeModalChild(true)
    }

    return (
        <div>
           
            <div className="fixed top-0 mx-[120px] mt-[120px] left-0 z-50 justify-center items-center w-full">
                <div className="relative p-4 md:w-full md:max-w-2xl md:max-h-full">

                    <div className="relative bg-black rounded-lg shadow dark:bg-gray-700">

                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-400 dark:text-white">
                                {modalInfo.filteredMovie.title}
                            </h3>
                            <button onClick={closeModalHandle} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-4 md:p-5 space-y-4 flex">

                            <img src={ POSTER_PATH + modalInfo.filteredMovie.poster_path }  alt="" height="150px" width="250px" />
                            
                            <p className="leading-relaxed text-gray-500 dark:text-gray-400 p-2 m-2 text-sm">
                               {modalInfo.filteredMovie.overview}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ShowInfoModal