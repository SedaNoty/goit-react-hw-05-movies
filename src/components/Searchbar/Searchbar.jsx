import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={css.SearchForm}>
      <input
        className={css.SearchForm_input}
        type="text"
        name="filmInput"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
      />
      <button type="submit" className={css.SearchForm_button}>
        Search
      </button>
    </form>
  );
};

export default Searchbar;