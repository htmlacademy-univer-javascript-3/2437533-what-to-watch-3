import {Film} from '../../types/film-type';
import {AppRoutes} from '../../consts/appRoutes';
import {Link} from 'react-router-dom';

type FilmCardButtonsProps = {
  film: Film;
}

export function FilmCardButtons({film}: FilmCardButtonsProps): JSX.Element {
  return(
    <div className="film-card__buttons">
      <Link to={AppRoutes.Player.replace(':id', film.id.toString())} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <Link to={AppRoutes.MyList} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
        <span className="film-card__count">9</span>
      </Link>
      <Link to={AppRoutes.AddReview.replace(':id', film.id.toString())} className="btn film-card__button">Add review</Link>
    </div>
  );
}
