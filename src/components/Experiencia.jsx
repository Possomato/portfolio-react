import React from 'react';
import styles from './Experiencia.module.css';
import { ApiContext } from '../../data/ApiContext';

export default function Experiencia() {
  const data = React.useContext(ApiContext);

  return (
    <ul className={styles.experiencia}>
      {data.professionalExperience.map(
        ({ name, period, description }, index) => (
          <li key={index}>
            <h3>{name}</h3>
            <p className={styles.tempoExperiencia}>
              <span className={styles.date} />
              {period}
            </p>
            <p className={styles.descricaoExperiencia}>{description}</p>
          </li>
        ),
      )}
    </ul>
  );
}
