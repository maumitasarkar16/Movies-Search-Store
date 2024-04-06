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

            <div className='mx-28'>
                <h2 className='font-bold text-3xl font-sans py-2 my-2 text-white'>{movieTitle}</h2>
                <p className='py-2 my-2 text-sm text-white font-bold w-1/2'>{itCanOverflow ? beginText + "..." : beginText}</p>
                <div>
                    <button className='py-[15px] px-[50px]  bg-slate-200 text-black rounded-lg text-lg hover:bg-opacity-50 font-bold' >Play</button>
                    <button className='py-[15px] px-[50px] mx-2 bg-gray-500 text-white rounded-lg text-lg hover:bg-opacity-50 font-bold' onClick={showModalHandle}>Info</button>
                </div>
            </div>


            {/* {showModal ? (<ShowInfoModal closeModalChild={() => setShowModal(false)} movieOverview={movieOverview} movieTitle={movieTitle} moviePoster={moviePoster} />) : null}   */}  {/* props drilling issue, saved the data using context api */}

            {showModal ? (<ShowInfoModal closeModalChild={() => setShowModal(false)} />) : null}  {/** close modal data is updating from child */}

        </div>

    )
}

export default MovieTitle