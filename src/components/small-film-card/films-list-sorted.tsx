import {JSX, useEffect} from 'react';
import SmallFilmCard from './small-film-card';
import {Genre} from '../../consts/genres';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setFilmsGenreCount} from '../../store/action';


export function FilmsListSorted(): JSX.Element {
  let films = useAppSelector((state) => state.films);
  const selectedGenre = useAppSelector((state) => state.genre);
  const visibleFilmsCount = useAppSelector((state) => state.currentGenreVisibleCount);
  useAppSelector((state) => state.mainFilm?.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFilmsGenreCount(films.length));
  }, [dispatch, films.length, selectedGenre, visibleFilmsCount]);
  films = films.filter((f) => f.genre === selectedGenre || selectedGenre === Genre.All);
  films = films.slice(0, visibleFilmsCount);

  return (
    <div className="catalog__films-list" >
      {
        films.map((film) => (
          <SmallFilmCard filmId={film.id} key={film.name} name={film.name} imgSrc={film.previewImage} videoLink={film.previewVideoLink}/>)
        )
      }
    </div>
  );
}
