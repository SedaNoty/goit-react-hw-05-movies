
import { FallingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.Loader}>
    <FallingLines
      color="#7e9499"
      width="100"
      visible={true}
      ariaLabel='falling-lines-loading'
    />
  </div>
);
