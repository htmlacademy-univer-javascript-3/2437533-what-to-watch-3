import {useAppDispatch} from '../../hooks';
import {logoutAction} from '../../store/api-actions';

export function UserBlockSignOut(): JSX.Element {
  const dispatch = useAppDispatch();

  return(
    <li className="user-block__item" onClick={(evt) => {
      evt.preventDefault();
      dispatch(logoutAction());
    }}
    >
      <a className="user-block__link">Sign out</a>
    </li>
  );
}
