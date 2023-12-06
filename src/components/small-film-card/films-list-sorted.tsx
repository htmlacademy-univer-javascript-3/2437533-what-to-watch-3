import {JSX} from 'react';
import SmallFilmCard from './small-film-card';
import {Film} from '../../types/film-type';
import {Genre} from '../../consts/genres';

type FilmsListSimilarProps = {
  mainFilmId: number;
  mainFilmGenre: Genre;
  films: Film[];
}


export function FilmsListSimilar({mainFilmId, mainFilmGenre, films}: FilmsListSimilarProps): JSX.Element {

  return (
    <div className="catalog__films-list" >
      {
        films.map((film) => {
          if (film.id !== mainFilmId && film.genre === mainFilmGenre) {
            return(
              <SmallFilmCard filmId={film.id} key={film.name} name={film.name} imgSrc={film.filmImg} videoLink={film.videoLink}/>);
          }
        }
        )
      }
    </div>
  );
}
