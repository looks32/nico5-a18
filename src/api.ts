const BASE_URL = 'https://movies-api.nomadcoders.workers.dev';

export interface IMoive {
  id?:number,
  title?:string,
  overview?:string | undefined,
  backdrop_path?:string,
  poster_path?:string,
  vote_average?:number,
  runtime?:number,
  layout?:string
}

export interface IGetMoviesResult {
  results : IMoive[]; 
}

export function getPopular() {
  return fetch(`${BASE_URL}/popular`).then((r) => r.json());
}

export function getNowPlaying() {
  return fetch(`${BASE_URL}/now-playing`).then((r) => r.json());
}

export function getComingSoon() {
  return fetch(`${BASE_URL}/coming-soon`).then((r) => r.json());
}

export function getMovie(id:string | undefined) {
  return fetch(`${BASE_URL}/movie?id=${id}`).then((r) => r.json());
}

export function makeImagePath(image:string | undefined) {
  return `https://image.tmdb.org/t/p/w500${image}`;
}

export function makeBgPath(image:string | undefined) {
  return `https://image.tmdb.org/t/p/original${image}`;
}