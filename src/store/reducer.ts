import {createReducer} from '@reduxjs/toolkit';
import {Genre} from '../consts/genres';
import {filmsMock} from '../mocks/films';
import {changeGenre, setFilms, setMainFilm} from './action';


const initialState = {
  main: filmsMock[0],
  genre: Genre.All,
  films: filmsMock,
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
    });
});

export {reducer};
