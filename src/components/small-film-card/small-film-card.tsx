import {JSX} from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../consts/appRoutes';
import {useEffect, useRef, useState} from 'react';
import {TIMEOUT_BEFORE_PLAYING} from '../../consts/other-consts';


type SmallFilmCardProps = {
  filmId: string;
  imgSrc: string;
  name: string;
  videoLink: string;
}

function SmallFilmCard({imgSrc, name, filmId, videoLink}: SmallFilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement) {
      return;
    }

    if (isPlaying) {
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      setTimeout(() => playerElement.play(), TIMEOUT_BEFORE_PLAYING);
      return;
    }

    playerElement.pause();
  }, [isPlaying]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setActiveCardId] = useState('-1');

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setActiveCardId(filmId)}
      onMouseLeave={() => setActiveCardId('-1')}
    >
      <div className="small-film-card__image" onMouseEnter={() => setIsPlaying(!isPlaying)}
        onMouseLeave={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ?
          <video src={videoLink} className="player__video" poster={imgSrc} ref={videoRef} muted
            width="280" height="175"
          >
          </video> :
          <img src={imgSrc} alt={name} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoutes.Films.replace(':id', filmId.toString())}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
