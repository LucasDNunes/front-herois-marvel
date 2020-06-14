import React from 'react';

import './main.css';
import api from '../../services/api.js';
import { useEffect } from 'react';
import PersonagemList from '../PersonagemList';
import { useState } from 'react';

export default function Main(){
  const [personagens , setPersonagens] = useState([]);
  const [buscaPersonagens , setBuscaPersonagens] = useState('');

  useEffect(() => {
    async function carregarPersonagens(){
      const response =  await api.get(`/v1/public/characters`,{
        params:{
          limit: 100,
          nameStartsWith: buscaPersonagens,
        }
      });
      const {results} = response.data.data;
      setPersonagens(results)
    }
    if(buscaPersonagens === ''){
      setBuscaPersonagens(null)
    }
    carregarPersonagens();
  }, [buscaPersonagens]);
  

  function handleSearchChange(e) {
    const { value } = e.target;
    setBuscaPersonagens(value);
  }
  
  return (
    <>
    <div className="search">
        <input
        type="text"
        name="search"
        placeholder="Procure seu herói favorito"
        onChange={handleSearchChange}
        />
    </div>
    <PersonagemList personagens={personagens}/>
    </>
);
}