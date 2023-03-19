import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'TMDB_API/TMDB_API';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [filmsByQ, setFilmsByQ] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!filmName) {
      return;
    }

    async function fetchFilms() {
      try {
        const films = await searchMovies(filmName);

        if (films.length < 1) {
          return alert(`No films on your query ${filmName}`);
        }

        setFilmsByQ(films);
      } catch (error) {
        console.log(error);
      }
    }

    fetchFilms();
  }, [filmName]);

  const moviesSearch = useMemo(() => {
    return filmsByQ.filter(film => film.title.toLowerCase().includes(filmName));
  }, [filmsByQ, filmName]);

  const handleFormSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const normilizedValue = form.elements.filmInput.value.toLowerCase();

    if (normilizedValue.trim() === '') {
      return alert('Please write correct movie name');
    }

    const searchName =
      normilizedValue !== '' ? { name: normilizedValue.trim() } : {};

    setSearchParams(searchName);
  };

  return (
    <main>
      <Searchbar onSubmit={handleFormSubmit} />

      {moviesSearch && (
        <MoviesList moviesSearch={moviesSearch} />
      )}
    </main>
  );
};

export default Movies;