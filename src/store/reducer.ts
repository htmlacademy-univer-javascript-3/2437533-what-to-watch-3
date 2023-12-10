import {createReducer} from '@reduxjs/toolkit';
import {Genre} from '../consts/genres';
import {filmsMock} from '../mocks/films';
import {
  changeGenre,
  addCurrVisibleCount,
  setFilms,
  setMainFilm,
  resetCurrVisibleCount, setFilmsGenreCount
} from './action';


const initialState = {
  main: filmsMock[0],
  genre: Genre.All,
  films: filmsMock,
  currentGenreVisibleCount: 8,
  currentGenreCount: filmsMock.length,
};

const reducer = createReducer(initialState, (builder) => {
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
    });
});

export {reducer};
