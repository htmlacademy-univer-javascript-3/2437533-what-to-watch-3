import {ReviewType} from '../../types/review-type';

type ReviewProps = {
  review: ReviewType;
}

export function Review({review}: ReviewProps): JSX.Element {
  const parts = review.dateTime.split('-');
  const partsNum = parts.map((str) => parseInt(str, 10));
  const date = new Date(partsNum[0], partsNum[1] - 1, partsNum[2]);


  return(
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime={review.dateTime}>{date.toLocaleDateString('en-US')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">8,9</div>
    </div>
  );
}
