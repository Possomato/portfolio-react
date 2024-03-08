import React from 'react';
import './App.css';
import Header from './components/Header';
import { ApiStorage } from '../data/ApiContext';
import Acordeon from './components/Acordeon';
import Habilidades from './components/Habilidades';
import Educacao from './components/Educacao';
import Idiomas from './components/Idiomas';
import Projetos from './components/Projetos';
import Experiencia from './components/Experiencia';

export default function App() {
  return (
    <ApiStorage>
      <main>
        <Header />
        <Acordeon identificador="Skills" contentTag={<Habilidades />} />
        <Acordeon identificador="Educação" contentTag={<Educacao />} />
        <Acordeon identificador="Idiomas" contentTag={<Idiomas />} />
        <Acordeon identificador="Projetos" contentTag={<Projetos />} />
        <Acordeon identificador="Experiência" contentTag={<Experiencia />} />
      </main>
    </ApiStorage>
  );
}
