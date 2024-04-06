import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import searchReducer from './searchMoviesSlice';
import languageReducer from './configSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        searchMovies: searchReducer,
        languageSearch: languageReducer
    }
})

export default appStore;