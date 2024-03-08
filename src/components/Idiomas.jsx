import React from 'react';
import { ApiContext } from '../../data/ApiContext';
import styles from './Idiomas.module.css';

const levelToBars = {
  2: styles.bars2,
  3: styles.bars3,
  4: styles.bars4,
};

export default function Idiomas() {
  const data = React.useContext(ApiContext);

  if (!data) return <p>carregando...</p>;
  return (
    <ul className={styles.listaIdiomas}>
      {data.languages.map(({ language, level }, index) => (
        <li key={index} className={styles.idioma}>
          <div className={`${levelToBars[level]} ${styles.bars}`}></div>
          {language}
        </li>
      ))}
    </ul>
  );
}
