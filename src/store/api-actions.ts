import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatchType, StateType} from '../types/state-type';
import {FilmType} from '../types/film-type';
import {
  redirectToRoute,
  requireAuthorization, setComments, setCurrentFilm, setError,
  setFilmDataLoadingStatus,
  setFilms,
  setMainFilm, setSimilarFilms, setUserData
} from './action';
import {APIRoute} from '../consts/api-actions';
import {AuthData} from '../types/auth-data';
import {dropToken, saveToken} from '../services/token';
import {AuthorizationStatus} from '../consts/authorization';
import {UserData} from '../types/user-data';
import {TIMEOUT_SHOW_ERROR} from '../consts/other-consts';
import {store} from './index';
import {AppRoutes} from '../consts/appRoutes';
import {CommentType} from "../types/comment-type";


export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmDataLoadingStatus(true));
    const {data} = await api.get<FilmType[]>(APIRoute.Films);
    dispatch(setFilmDataLoadingStatus(false));
    dispatch(setFilms(data));
  },
);

export const fetchMainFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchMainFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType>(APIRoute.Promo);
    dispatch(setMainFilm(data));
  },
);

export const fetchCurrentFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentFilm',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType>(`${APIRoute.Films}/${filmId}`);
    dispatch(setCurrentFilm(data));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType[]>(`${APIRoute.Films}/${filmId}/similar`);
    dispatch(setSimilarFilms(data));
  },
);


export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<CommentType[]>(`${APIRoute.Comments}/${filmId}`);
    dispatch(setComments(data));
  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token, name, avatarUrl}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserData({email, name, avatarUrl, token}));
    dispatch(redirectToRoute(AppRoutes.Main));
  },
);


export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoutes.Main));
  },
);

export const clearErrorAction = createAsyncThunk(
  'wtw/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

