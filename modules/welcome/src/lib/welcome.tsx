import styles from './welcome.module.css';

/* eslint-disable-next-line */
export interface WelcomeProps {}

export function Welcome(props: WelcomeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Welcome!</h1>
    </div>
  );
}

export default Welcome;
