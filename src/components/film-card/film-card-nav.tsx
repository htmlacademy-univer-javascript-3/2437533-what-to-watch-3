import {Film} from '../../types/film-type';
import {AppRoutes} from '../../consts/appRoutes';
import {Link} from 'react-router-dom';

type FilmCardNavProps = {
  film: Film;
}

export function FilmCardNav({film}: FilmCardNavProps): JSX.Element {
  return(
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className="film-nav__item film-nav__item--active">
          <Link to={AppRoutes.Films.replace(':id', film.id.toString())} className="film-nav__link">Overview</Link>
        </li>
        <li className="film-nav__item">
          <Link to={AppRoutes.Details.replace(':id', film.id.toString())} className="film-nav__link">Details</Link>
        </li>
        <li className="film-nav__item">
          <Link to={AppRoutes.Reviews.replace(':id', film.id.toString())} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}
