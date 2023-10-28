import styles from './chip.module.css';

/* eslint-disable-next-line */
export interface ChipProps {}

export function Chip(props: ChipProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Chip!</h1>
    </div>
  );
}

export default Chip;
