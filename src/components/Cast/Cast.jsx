import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'TMDB_API/TMDB_API';
import { imagePast } from 'images/images';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function searchFilmsById() {
      try {
        const filmCast = await getMovieCredits(movieId);

        setCast(filmCast);
      } catch (error) {
        console.log(error);
      }
    }

    searchFilmsById();
  }, [movieId]);

  return (
    <div>
      {cast.length < 1 && <p>No information about the cast for this movie.</p>}

      {cast.length > 0 && (
        <ul
          style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            listStyle: 'none',
            justifyContent: 'center',
          }}
        >
          {cast.map(({ id, original_name, name, profile_path }) => (
            <li
              key={id}
              style={{
                width: 150,
              }}
            >
              <img
                src={imagePast(profile_path)}
                alt={name || original_name || 'no info'}
                style={{
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              />
              <h4>{name || original_name || 'no info'}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;