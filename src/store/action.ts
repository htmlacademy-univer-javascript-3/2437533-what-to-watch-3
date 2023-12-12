import { createAction } from '@reduxjs/toolkit';
import {FilmType} from '../types/film-type';
import {AuthorizationStatus} from '../consts/authorization';
import {AppRoutes} from '../consts/appRoutes';
import {UserData} from '../types/user-data';

export const changeGenre = createAction<string>('genre/change');
export const setFilms = createAction<FilmType[]>('genre/films');
export const setMainFilm = createAction<FilmType>('films/mainId');
export const addCurrVisibleCount = createAction('films/visible_cnt');
export const resetCurrVisibleCount = createAction('films/visible_cnt_reset');
export const setFilmsGenreCount = createAction<number>('films/current_genre_films_cnt');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setFilmDataLoadingStatus = createAction<boolean>('data/setFilmDataLoadingStatus');
export const setError = createAction<string | null>('films/setError');
export const redirectToRoute = createAction<AppRoutes>('wtw/redirectToRoute');
export const setUserData = createAction<UserData>('data/user');
