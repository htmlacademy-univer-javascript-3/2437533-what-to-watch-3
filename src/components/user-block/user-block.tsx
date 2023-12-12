import {useAppSelector} from '../../hooks';
import {UserBlockAvatar} from './user-block-avatar';
import {AuthorizationStatus} from '../../consts/authorization';
import {UserBlockSignOut} from './user-block-sign-out';
import {UserBlockSignIn} from './user-block-sign-in';
import {useEffect} from 'react';

export function UserBlock(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => { }, [authStatus]);


  return(
    <ul className="user-block">
      {authStatus === AuthorizationStatus.Auth && (<UserBlockAvatar></UserBlockAvatar>)}
      {authStatus === AuthorizationStatus.Auth && (<UserBlockSignOut></UserBlockSignOut>)}
      {authStatus === AuthorizationStatus.NoAuth && (<UserBlockSignIn></UserBlockSignIn>)}
    </ul>
  );
}
