import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getMovieDetails } from 'TMDB_API/TMDB_API';
import MoviesInfo from 'components/MoviesInfo/MoviesInfo';
import { Link } from 'components/App.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState(null);
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/movies';

  useEffect(() => {
    async function searchFilmsById() {
      try {
        const film = await getMovieDetails(movieId);

        setFilmInfo(film);
      } catch (error) {
        console.log(error);
      }
    }

    searchFilmsById();
  }, [movieId]);

  if (!filmInfo) {
    return null;
  }

  return (
    <main>
      <Link to={backLinkHref}>
        Go back
      </Link>

      <MoviesInfo filmInfo={filmInfo} state={{ from: location }} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;