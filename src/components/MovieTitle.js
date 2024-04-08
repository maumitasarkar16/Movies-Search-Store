import React, { useState } from 'react'
import ShowInfoModal from './ShowInfoModal'

const MovieTitle = ({ movieTitle, movieOverview, moviePoster }) => {

    const [showModal, setShowModal] = useState(false)

    const showModalHandle = () => {
        setShowModal(true)
    }

    const splittedText = movieOverview.split(' ');
    const itCanOverflow = splittedText.length > 36;
    const beginText = itCanOverflow ? splittedText.slice(0, 36 - 1).join(' ') : movieOverview;

    return (
        <div>

            <div className='md:mx-28 py-14 my-14 md:py-6 md:my-6'>
                <h2 className='text-lg font-bold md:text-3xl font-sans  text-white'>{movieTitle}</h2>
                <p className='py-2 my-2 text-sm text-white font-bold w-1/2 hidden md:inline-block'>{itCanOverflow ? beginText + "..." : beginText}</p>
                <div className='flex'>
                    <button className='py-[2px] px-[15px] md:py-[15px] md:px-[50px]  bg-slate-200 text-black rounded-lg text-lg hover:bg-opacity-50 font-bold' >Play</button>
                    <button className='py-[2px] px-[15px] md:py-[15px] md:px-[50px] mx-2 bg-gray-500 text-white rounded-lg text-lg hover:bg-opacity-50 font-bold hidden md:inline-block' onClick={showModalHandle}>Info</button>
                </div>
            </div>


            {/* {showModal ? (<ShowInfoModal closeModalChild={() => setShowModal(false)} movieOverview={movieOverview} movieTitle={movieTitle} moviePoster={moviePoster} />) : null}   */}  {/* props drilling issue, saved the data using context api */}

            {showModal ? (<ShowInfoModal closeModalChild={() => setShowModal(false)} />) : null}  {/** close modal data is updating from child */}

        </div>

    )
}

export default MovieTitle