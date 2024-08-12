import React from 'react';
import styles from './App.module.scss';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div className={styles.App}>
        <button onClick={() => setCount(value => value + 1)}>boop</button>
        {count}
      </div>
    </>
  )
}

export default App;
