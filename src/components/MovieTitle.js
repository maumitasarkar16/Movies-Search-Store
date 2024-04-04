import React from 'react'

const MovieTitle = ({ movieTitle, movieOverview }) => {

    return (

        <div className='mx-28'>
            <h2 className='font-bold text-3xl font-sans  text-white'>{movieTitle}</h2>
            <p className='py-2 my-2 text-sm text-white font-bold w-1/2'>{movieOverview}</p>
            <div>
                <button className='py-[15px] px-[50px]  bg-slate-200 text-black rounded-lg text-lg hover:bg-opacity-50 font-bold '>Play</button>
                <button className='py-[15px] px-[50px] mx-2 bg-gray-700 text-white rounded-lg text-lg hover:bg-opacity-50 font-bold '>Info</button>
            </div>
        </div>


    )
}

export default MovieTitle