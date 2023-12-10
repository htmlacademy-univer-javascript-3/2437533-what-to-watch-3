import { useAppDispatch} from '../../hooks';
import { MouseEvent } from 'react';
import {addCurrVisibleCount} from '../../store/action';

export function ShowMoreButton() {
  const dispatch = useAppDispatch();
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={(evt: MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        dispatch(addCurrVisibleCount());
      }}
      >Show more
      </button>
    </div>
  );
}
