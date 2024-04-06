import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList: null,
        movieBackground: null,
        popularList: null,
        upcomingList: null,
        topRatedList: null,
        trailer: null,
    },
    reducers: {
        addMovies: (state, action) => {
            state.moviesList = action.payload;  //update the store with movies list fetched from tmdb
        },
        addPopularMovies: (state, action) => {
            state.popularList = action.payload;  //update the store with movies list fetched from tmdb
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingList = action.payload;  //update the store with movies list fetched from tmdb
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedList = action.payload;  //update the store with movies list fetched from tmdb
        },
        addMovieBackground: (state, action) => {
            state.movieBackground = action.payload;
        },
        movieListTrailer: (state, action) => {
            state.trailer = action.payload;
        },

    }
})

export const { addMovies, addMovieBackground, addPopularMovies, addUpcomingMovies, addTopRatedMovies, movieListTrailer } = moviesSlice.actions;
export default moviesSlice.reducer