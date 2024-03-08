// Acordeon.jsx
import React from 'react';
import styles from './Acordeon.module.css';

export default function Acordeon({ identificador, contentTag }) {
  const [content, setContent] = React.useState(false);

  return (
    <section className={`${styles.acordeon} ${content ? styles.open : ''}`}>
      <button onClick={() => setContent(!content)} className={styles.trigger}>
        {identificador}
        <span className={`${styles.arrow} ${content ? styles.arrowOpen : ''}`}></span>
      </button>
      {content && (
        <div className={styles.content}>
          {contentTag}
        </div>
      )}
    </section>
  );
}
