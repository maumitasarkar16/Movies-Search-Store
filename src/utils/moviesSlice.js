import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList: null,
        movieBackground: null
    },
    reducers: {
        addMovies: (state, action) => {
             state.moviesList = action.payload;  //update the store with movies list fetched from tmdb
        },
        addMovieBackground: (state, action) => {
            state.movieBackground = action.payload;  
       }

    }
})

export const { addMovies, addMovieBackground } = moviesSlice.actions;
export default moviesSlice.reducer