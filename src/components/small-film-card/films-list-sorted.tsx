import {JSX, useEffect} from 'react';
import SmallFilmCard from './small-film-card';
import {Genre} from '../../consts/genres';
import {useAppSelector} from '../../hooks';


type FilmsListSortedProps = {
  mainFilmId: number;
}


export function FilmsListSorted({mainFilmId}: FilmsListSortedProps): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const mainFilmGenre = useAppSelector((state) => state.genre);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => { }, [mainFilmGenre]);

  return (
    <div className="catalog__films-list" >
      {
        films.map((film) => {
          if (film.id !== mainFilmId && (film.genre === mainFilmGenre || mainFilmGenre === Genre.All)) {
            return(
              <SmallFilmCard filmId={film.id} key={film.name} name={film.name} imgSrc={film.filmImg} videoLink={film.videoLink}/>);
          }
        }
        )
      }
    </div>
  );
}
