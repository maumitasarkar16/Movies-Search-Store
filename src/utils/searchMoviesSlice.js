import { createSlice } from "@reduxjs/toolkit";

const searchMoviesSlice = createSlice({
    name: "searchMovies",
    initialState: {
        showSearchPage: false,
        searchDelete: false,
        movieSearchNamesFromOpenAi : null,
        movieSearchResultsFromTmtb: null,
        showLoader: false
       
    },
    reducers: {
        showSearch: (state) => {
            state.showSearchPage = !state.showSearchPage
        },
        searchMovies: (state, action) => {
           const {movieSearchNamesFromOpenAi, movieSearchResultsFromTmtb} = action.payload
           state.movieSearchNamesFromOpenAi = movieSearchNamesFromOpenAi;
           state.movieSearchResultsFromTmtb = movieSearchResultsFromTmtb;
        },
        updateSearchDelete: (state, action) => {
            state.searchDelete = action.payload
            state.movieSearchNamesFromOpenAi = null;
            state.movieSearchResultsFromTmtb = null;
        },
        updateShowLoader: (state, action) => {
            state.showLoader = action.payload
        }
    }
})

export const { showSearch, searchMovies, updateSearchDelete, updateShowLoader } = searchMoviesSlice.actions;
export default searchMoviesSlice.reducer