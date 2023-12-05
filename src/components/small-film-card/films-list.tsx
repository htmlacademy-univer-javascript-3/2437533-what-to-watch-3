import {JSX} from 'react';
import SmallFilmCard from './small-film-card';
import {Film} from '../../types/film-type';

type FilmsListProps = {
  mainFilmId: number;
  films: Film[];
}


export function FilmsList({mainFilmId, films}: FilmsListProps): JSX.Element {

  return (
    <div className="catalog__films-list" >
      {
        films.map((film) => {
          if (film.id !== mainFilmId) {
            return(
              <SmallFilmCard filmId={film.id} key={film.name} name={film.name} imgSrc={film.filmImg} videoLink={film.videoLink}/>);
          }
        }
        )
      }
    </div>
  );
}
