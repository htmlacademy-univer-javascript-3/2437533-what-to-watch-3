import {JSX} from 'react';
import {Link, useParams} from 'react-router-dom';
import {CommentSendForm} from '../../components/comment-send-form/comment-send-form';
import { useState } from 'react';
import {useAppSelector} from '../../hooks';


export function AddReviewPage(): JSX.Element {
  const [filmRating, setFilmRating] = useState(0);
  if (filmRating !== undefined) {
    //на будущее с отправкой формы
  }
  const films = useAppSelector((state) => state.films);

  const params = useParams();
  const paramsId = parseInt(params.id || '1', 10);
  const movie = films.find((f) => f.id === paramsId) || films[0];

  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie.previewImage} alt={movie.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={'film-page.html'} className={'breadcrumbs__link'}>{movie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="../../markup/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={movie.previewImage} alt={movie.name} width="218"
               height="327"
          />
        </div>
      </div>

      <CommentSendForm onAnswer={(rating) => setFilmRating(rating)}></CommentSendForm>
    </section>
  );
}
