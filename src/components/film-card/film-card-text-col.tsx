import {FilmType} from '../../types/film-type';

type FilmCardTextColProps = {
  film: FilmType;
}

export function FilmCardTextCol({film}: FilmCardTextColProps): JSX.Element {
  return(
    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Director</strong>
        <span className="film-card__details-value">{film.director}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Starring</strong>
        <span className="film-card__details-value">
          {film.starring.join(', \n')}
        </span>
      </p>
    </div>
  );
}
