import React from 'react';
import { ApiContext } from '../../data/ApiContext';
import styles from './Header.module.css';

export default function Header() {
  const data = React.useContext(ApiContext);

  if (!data) return 'carregando';
  return (
    <header>
      <img src={data.photo} alt="foto perfil" />

      <h1>
        <p>Olá, eu sou</p>
        <p>{data.name}</p>
      </h1>

      <div className={styles.information}>
        <p>
          <span className={`${styles.job} ${styles.icons}`} />
          <span>{data.job}</span>
        </p>
        <p>
          <span className={`${styles.local} ${styles.icons}`} />
          <span>{data.location}</span>
        </p>
        <p>
          <span className={`${styles.phone} ${styles.icons}`} />
          <a
            href={'https://api.whatsapp.com/send?phone=' + data.phone}
            target="_blank"
          >
            {data.phone}
          </a>
        </p>
        <p>
          <span className={`${styles.mail} ${styles.icons}`} />
          <a href={'mailto:' + data.mail} target="_blank">
            {data.mail}
          </a>
        </p>
      </div>
    </header>
  );
}
