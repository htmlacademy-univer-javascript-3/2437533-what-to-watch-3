import {createReducer} from '@reduxjs/toolkit';
import {Genre} from '../consts/genres';
import {
  changeGenre,
  addCurrVisibleCount,
  setFilms,
  setMainFilm,
  resetCurrVisibleCount,
  setFilmsGenreCount,
  requireAuthorization,
  setFilmDataLoadingStatus,
  setUserData, setCurrentFilm, setSimilarFilms, setReviews, setFavoriteFilms, setError
} from './action';
import {AuthorizationStatus} from '../consts/authorization';
import {FilmType} from '../types/film-type';
import {UserData} from '../types/user-data';
import {ReviewType} from '../types/review-type';

type InitialState = {
  mainFilm: FilmType | null;
  currentFilm: FilmType | null;
  genre: string;
  films: FilmType[];
  similarFilms: FilmType[];
  favoriteFilms: FilmType[];
  reviews: ReviewType[];
  currentGenreVisibleCount: number;
  currentGenreCount: number;
  authorizationStatus: AuthorizationStatus;
  isFilmDataLoading: boolean;
  error: string | null;
  user: UserData | null;
};


const initialState: InitialState = {
  mainFilm: null,
  currentFilm: null,
  genre: Genre.All,
  films: [],
  similarFilms: [],
  favoriteFilms: [],
  reviews: [],
  currentGenreVisibleCount: 8,
  currentGenreCount: 0,
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmDataLoading: false,
  error: null,
  user: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setMainFilm, (state, action) => {
      state.mainFilm = action.payload;
    })
    .addCase(setCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(addCurrVisibleCount, (state) => {
      state.currentGenreVisibleCount += 8;
    })
    .addCase(resetCurrVisibleCount, (state) => {
      state.currentGenreVisibleCount = 8;
    })
    .addCase(setFilmsGenreCount, (state, action) => {
      state.currentGenreCount = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setFilmDataLoadingStatus, (state, action) => {
      state.isFilmDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    });
});
