// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Splash } from 'splash';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="clothing-store" />
      <Splash />
    </div>
  );
}

export default App;
