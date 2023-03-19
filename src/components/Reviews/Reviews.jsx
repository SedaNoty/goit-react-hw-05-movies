import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'TMDB_API/TMDB_API';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function searchFilmsById() {
      try {
        const filmReview = await getMovieReviews(movieId);

        setReviews(filmReview);
      } catch (error) {
        console.log(error);
      }
    }

    searchFilmsById();
  }, [movieId]);

  return (
    <div>
      {reviews.length < 1 && <p>We don't have any reviews for this movie.</p>}

      {reviews.length > 0 && (
        <ul
          style={{
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
            listStyle: 'none',
          }}
        >
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author || 'no info'}</h3>
              <p>{content || 'no info'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;