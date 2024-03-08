import React from 'react';
import styles from './Projetos.module.css';
import { ApiContext } from '../../data/ApiContext';

export default function Projetos() {
  const data = React.useContext(ApiContext);

  if (!data) return <p>carregando...</p>;
  return (
    <ul className={styles.listaProjetos}>
      {data.portfolio.map(({ name, url, github }, index) => (
        <li className={styles.projeto} key={index}>
          <h3 className={styles.title}>
            <span className={github ? styles.github : ''} />
            {name}
          </h3>
          <a href={url} target="_blank" className={styles.linkProjeto}>{url}</a>
        </li>
      ))}
    </ul>
  );
}
