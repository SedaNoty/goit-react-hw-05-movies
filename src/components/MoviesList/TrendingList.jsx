import { Link } from 'components/App.styled';

const TrendingList = ({ movieDay }) => {

  return (
    <ul>
      {movieDay.map(({ id, title, name }) => (
        <li key={id}>
          <Link
            to={`movies/${id}`}
            state={{ from: '/' }}
          >
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;