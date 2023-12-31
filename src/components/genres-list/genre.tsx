import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre, resetCurrVisibleCount} from '../../store/action.ts';
import {Link} from 'react-router-dom';

type GenreItemProps = {
  genreName: string;
}

export function GenreItem({ genreName }: GenreItemProps) {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);

  const changeGenreHandler = () => {
    dispatch(resetCurrVisibleCount());
    dispatch(changeGenre(genreName));
  };
  return (
    <li className={cn(
      'catalog__genres-item',
      {'catalog__genres-item--active': activeGenre === genreName})}
    >
      <Link to={'#'} className="catalog__genres-link" onClick={changeGenreHandler}>{genreName}</Link>
    </li>
  );
}
