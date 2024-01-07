import {JSX, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {CommentSendForm} from '../../../components/comment-send-form/comment-send-form';
import { useState } from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {UserBlock} from '../../../components/user-block/user-block';
import {Logo} from '../../../components/logo/logo';
import {LoadingScreen} from '../../loading-screen/loading-screen';
import {APIRoute} from '../../../consts/api-actions';
import {
  fetchCurrentFilmAction,
} from '../../../store/api-actions';
import {setCurrentFilm} from '../../../store/action';


export function AddReviewPage(): JSX.Element {
  const [, setFilmRating] = useState(0);
  const id = useParams().id || '';
  const movie = useAppSelector((state) => state.currentFilm);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchCurrentFilmAction(id));
    return () => {
      dispatch(setCurrentFilm(null));
    };
  }, [dispatch, id]);

  if (movie === null) {
    return <LoadingScreen/>;
  }

  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie.backgroundImage} alt={movie.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo></Logo>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${APIRoute.Films}/${movie.id}`} className={'breadcrumbs__link'}>{movie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock></UserBlock>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={movie.posterImage} alt={movie.name} width="218"
            height="327"
          />
        </div>
      </div>

      <CommentSendForm onAnswer={(rating) => setFilmRating(rating)}></CommentSendForm>
    </section>
  );
}
