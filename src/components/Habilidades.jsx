import React from 'react';
import styles from './Habilidades.module.css';
import { ApiContext } from '../../data/ApiContext';

export default function Habilidades() {
  const data = React.useContext(ApiContext);

  if (!data) return <p>carregando...</p>;
  return (
    <div className={styles.habilidades}>
      <div className={styles.habilidadesPro}>
        <h3>Ferramentas:</h3>
        <div className={styles.techs}>
          <ul>
            {data.skills.hardSkills.map((hard, index) => (
              <li key={index}>
                <img src={hard.logo} alt={hard.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className={styles.habilidadesPes}>
        {data.skills.softSkills.map((soft, index) => (
          <li key={index}>{soft}</li>
        ))}
      </ul>
    </div>
  );
}
