import {ReviewType} from '../../types/review-type';

type ReviewProps = {
  review: ReviewType;
}

export function Review({review}: ReviewProps): JSX.Element {
  const date = new Date(review.date);

  return(
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user}</cite>
          <time className="review__date" dateTime={review.date}>{date.toLocaleDateString('en-US')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}
