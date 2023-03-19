import { useLocation } from 'react-router-dom';
import { Link } from 'components/App.styled';
import { imagePast } from 'images/images';

const MoviesInfo = ({ filmInfo }) => {
  const location = useLocation();

  const {
    poster_path,
    title,
    name,
    original_title,
    release_date,
    first_air_date,
    overview,
    vote_average,
    genres,
  } = filmInfo;

  return (
    <div>
      <div style={{
       display: 'flex',
    }}>
        <img
          width="250px"
          src={imagePast(poster_path)}
          alt={title || name || 'no info'}
        />
        <div style={{
       marginLeft: 20,
    }}>
          <h2>
            {title || name || original_title || 'no info'}
            <span> {sliceFunction(release_date, first_air_date)}</span>
          </h2>
          <p>
            User Score: <span>{Math.ceil(vote_average * 10)}%</span>
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location?.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location?.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const sliceFunction = (release_date, first_air_date) => {
  if (!release_date && !first_air_date) {
    return '';
  }

  if (release_date) {
    return '(' + release_date.slice(0, 4) + ')';
  }

  return '(' + first_air_date.slice(0, 4) + ')';
};

export default MoviesInfo;