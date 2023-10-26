import {JSX} from 'react';
import {Link} from 'react-router-dom';

type SmallFilmCardProps = {
  filmId: number;
  imgSrc: string;
  name: string;
  onFilmCard: (id: number) => void;
}

function SmallFilmCard({imgSrc, name, filmId, onFilmCard}: SmallFilmCardProps): JSX.Element {
  const onMouseEnterHandler = () => {
    onFilmCard(filmId);
  };

  const onMouseLeaveHandler = () => {
    onFilmCard(-1);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <div className="small-film-card__image">
        <img src={imgSrc}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="film-page.html">{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
