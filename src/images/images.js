import noFoto from './no-image-available.jpg';

export const imagePast = path => {
  if (path === null || path === undefined) {
    return noFoto;
  }

  return `https://image.tmdb.org/t/p/w300${path}`;
};