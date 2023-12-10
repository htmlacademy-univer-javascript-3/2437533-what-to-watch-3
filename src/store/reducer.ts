import {createReducer} from '@reduxjs/toolkit';
import {Genre} from '../consts/genres';
import {filmsMock} from '../mocks/films';
import {
  changeGenre,
  addCurrVisibleCount,
  setFilms,
  setMainFilm,
  resetCurrVisibleCount, setFilmsGenreCount, requireAuthorization, setFilmDataLoadingStatus
} from './action';
import {AuthorizationStatus} from '../consts/authorization';
import {FilmType} from '../types/film-type';

type InitialState = {
  main: FilmType;
  genre: Genre;
  films: FilmType[];
  currentGenreVisibleCount: number;
  currentGenreCount: number;
  authorizationStatus: AuthorizationStatus;
  isFilmDataLoading: boolean;
};


const initialState: InitialState = {
  main: filmsMock[0],
  genre: Genre.All,
  films: [],
  currentGenreVisibleCount: 8,
  currentGenreCount: 0,
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setMainFilm, (state, action) => {
      state.main = action.payload;
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
    });
});
