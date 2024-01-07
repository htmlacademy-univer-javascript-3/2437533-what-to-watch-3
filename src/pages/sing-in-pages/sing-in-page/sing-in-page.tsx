import {FormEvent, JSX, useRef} from 'react';
import {PageHeader} from '../../../components/page-header/page-header';
import {Footer} from '../../../components/footer/footer';
import {useAppDispatch} from '../../../hooks';
import {loginAction} from '../../../store/api-actions';

export function SingInPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  return(
    <div className="user-page">
      <PageHeader></PageHeader>

      <div className="sign-in user-page__content">
        <form
          action="src/pages/sing-in-pages/sing-in-page/sing-in-page#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                name="user-email"
                placeholder="Email address"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
}
