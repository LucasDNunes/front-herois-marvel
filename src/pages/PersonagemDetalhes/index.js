import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Series from './Series';
import api from '../../services/api.js'

import './styles.css';

export default function PersongaemDetalhes({ match }) {
  const { id } = match.params;
  const [personagem, setPersonagem] = useState([]);
  
  useEffect(() =>{
    async function carregarPersonagem(){
      const response =  await api.get(`/v1/public/characters/${id}`);
      const {results} = response.data.data;
      setPersonagem(results)
    }
    carregarPersonagem();
  }, [id]);

  return (
    <div className="detalhes-container">
      <div className="header">
        <h1>{personagem.name}</h1>
        <Link to={`${id}/editar`}>
          <button type="button">Editar</button>
        </Link>
      </div>
      {personagem.map(p => {
        return(
          <div className="detalhes-conteudo" key={p.id}>
            <img 
            src={p.thumbnail.path + '.' + p.thumbnail.extension} 
            alt={p.name} 
            />
            <p>
              {p.description.trim().length > 0
                ? p.description
                : 'Descrição não fornecida.'}
            </p>
          </div>
        );
      })}
      <hr className="hr" />
      <h1>Séries</h1>
      <Series id={Number(id)} />
    </div>
  );
}

