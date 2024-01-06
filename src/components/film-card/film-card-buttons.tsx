import {FilmType} from '../../types/film-type';
import {AppRoutes} from '../../consts/appRoutes';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {AuthorizationStatus} from '../../consts/authorization';
import {PlayButton} from '../buttons/play-button';
import {AddToListButton} from '../buttons/add-to-list-button';
import {InListButton} from '../buttons/in-list-button';

type FilmCardButtonsProps = {
  film: FilmType;
}

export function FilmCardButtons({film}: FilmCardButtonsProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => { }, [authStatus]);

  return(
    <div className="film-card__buttons">
      <PlayButton id={film.id}></PlayButton>
      {film.isFavorite ? (<InListButton id={film.id}></InListButton>) : (<AddToListButton id={film.id}></AddToListButton>)}
      {authStatus === AuthorizationStatus.Auth && (<Link to={AppRoutes.AddReview.replace(':id', film.id)} className="btn film-card__button">Add review</Link>)}
    </div>
  );
}
