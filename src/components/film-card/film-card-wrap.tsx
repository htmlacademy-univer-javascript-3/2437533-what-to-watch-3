import {FilmType} from '../../types/film-type';
import {FilmCardButtons} from './film-card-buttons';

type FilmCardWrapProps = {
  film: FilmType;
}

export function FilmCardWrap({film}: FilmCardWrapProps): JSX.Element {
  return(
    <div className="film-card__wrap">
      <div className="film-card__desc">
        <h2 className="film-card__title">{film.name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{film.genre}</span>
          <span className="film-card__year">{film.releaseYear}</span>
        </p>

        <FilmCardButtons film={film}></FilmCardButtons>
      </div>
    </div>
  );
}
