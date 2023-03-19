import { useState, useEffect } from 'react';
import { getTrending } from 'TMDB_API/TMDB_API';
import TrendingList from 'components/MoviesList/TrendingList';
  
const Home = () => {
    const [movieDay, setMovieDay] = useState([]);

  useEffect(() => {
    async function searchPopularFilms() {
      try {
        const films = await getTrending(1);

        setMovieDay(films);
      } catch (error) {
        console.log(error);
      }
    }

    searchPopularFilms();
  }, []);

    return (
        <main>
            <h1>Trending films today</h1>
            {movieDay.length > 0 && (
                <TrendingList 
                movieDay={movieDay} 
                />
            )}
        </main>
    );
};

export default Home;