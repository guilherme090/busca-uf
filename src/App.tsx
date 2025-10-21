import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { buscaRegioes, Regiao, Estado, buscaEstados } from './Api';

function App() {
  const [regioes, setRegioes] = useState<Regiao[]>([]);
  useEffect(() => {
    buscaRegioes().then(r => setRegioes(r));
  },[]);

  const [idRegiao, setIdRegiao] = useState<string>("");

  const [estados, setEstados] = useState<Estado[]>([]);
  useEffect(() => {
    buscaEstados(idRegiao).then(r => setEstados(r));
  },[idRegiao]);

  const [idUf, setIdUf] = useState<string>("");
  
  return (
    <form>
      <div>
        <label htmlFor="regioes">Região: </label>
        <select id="regioes" onChange={e => {
            setIdRegiao(e.target.value)
            setIdUf("");
          }}>
          <option value="">Selecione uma região</option>
          {regioes.map(regiao => (
            <option key={regiao.id} value={regiao.id}>{regiao.nome}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="estados">Estado: </label>
        <select id="estados" onChange={e => setIdUf(e.target.value)}>
          <option>Selecione um estado</option>
          {estados.map(estado => (
            <option key={estado.id} value={estado.id}>{estado.nome}</option>
          ))}
        </select>
      </div>
      <div>
        Id do estado selecionado: {idUf}; 
      </div>
    </form>  
  );
}

export default App;
