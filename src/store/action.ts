import { createAction } from '@reduxjs/toolkit';
import {FilmType} from '../types/film-type';
import {Genre} from '../consts/genres';

export const changeGenre = createAction<Genre>('genre/change');
export const setFilms = createAction<FilmType[]>('genre/films');
export const setMainFilm = createAction<FilmType>('films/mainId');
export const addCurrVisibleCount = createAction('films/visible_cnt');
export const resetCurrVisibleCount = createAction('films/visible_cnt_reset');
export const setFilmsGenreCount = createAction<number>('films/current_genre_films_cnt');
