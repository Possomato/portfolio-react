import React from 'react';
import styles from './Education.module.css';
import { ApiContext } from '../../data/ApiContext';

export default function Educacao() {
  const data = React.useContext(ApiContext);

  if (!data) return <p>carregando...</p>;
  return (
    <ul className={styles.cursos}>
      {data.education.map(
        ({ concluded, course, institution, period }, index) => (
          <li className={styles.curso} key={index}>
            <div className={styles.localEdu}>
              <span className={`${styles.book} ${styles.iconEdu}`}></span>
              <span>{institution}</span>
            </div>
            <div className={styles.dadosEdu}>
              <ul>
                <li>{course}</li>
                <li className={styles.tempoEdu}>
                  {period}
                  <span
                    className={`${concluded ? styles.check : styles.clock} ${
                      styles.iconEdu
                    }`}
                  ></span>
                </li>
              </ul>
            </div>
          </li>
        ),
      )}
    </ul>
  );
}
