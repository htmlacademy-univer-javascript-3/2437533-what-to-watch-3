import {FilmType} from '../../types/film-type';
import {AppRoutes} from '../../consts/appRoutes';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {AuthorizationStatus} from '../../consts/authorization';
import {PlayButton} from '../play-button/play-button';
import {AddToListButton} from '../add-to-list-button/add-to-list-button';
import {InListButton} from '../in-list-button/in-list-button';

type FilmCardButtonsProps = {
  film: FilmType;
}

export function FilmCardButtons({film}: FilmCardButtonsProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  useEffect(() => undefined, [authStatus]);

  return(
    <div className="film-card__buttons">
      <PlayButton id={film.id}></PlayButton>
      {film.isFavorite ? (<InListButton id={film.id}></InListButton>) : (<AddToListButton id={film.id}></AddToListButton>)}
      {authStatus === AuthorizationStatus.Auth && (<Link to={AppRoutes.AddReview.replace(':id', film.id)} className="btn film-card__button">Add review</Link>)}
    </div>
  );
}
