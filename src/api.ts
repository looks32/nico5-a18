const BASE_URL = 'https://movies-api.nomadcoders.workers.dev';

export function getPopular() {
  return fetch(`${BASE_URL}/popular`).then((r) => r.json());
}

export function getNowPlaying() {
  return fetch(`${BASE_URL}/now-playing`).then((r) => r.json());
}

export function getComingSoon() {
  return fetch(`${BASE_URL}/coming-soon`).then((r) => r.json());
}

// 일단 type any
export function getMovie(id:any) {
  return fetch(`${BASE_URL}/movie?id=${id}`).then((r) => r.json());
}

// 일단 type any
export function makeImagePath(image:any) {
  return `https://image.tmdb.org/t/p/w500${image}`;
}

// 일단 type any
export function makeBgPath(image:any) {
  return `https://image.tmdb.org/t/p/original${image}`;
}