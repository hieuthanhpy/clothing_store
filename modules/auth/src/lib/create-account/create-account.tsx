import styles from './create-account.module.css';

/* eslint-disable-next-line */
export interface CreateAccountProps {}

export function CreateAccount(props: CreateAccountProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CreateAccount!</h1>
    </div>
  );
}

export default CreateAccount;
