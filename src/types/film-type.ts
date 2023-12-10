import {Rating} from '../consts/ratings';
import {ReviewType} from './review-type';

export type FilmType = {
  id: string;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  ratingLevel: Rating;
  isFavorite: boolean;
  previewVideoLink: string;
  reviews: ReviewType[]; // delete
};
