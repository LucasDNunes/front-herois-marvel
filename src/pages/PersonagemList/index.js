import React from 'react';
import PersonagemCard from './PersonagemCard';

import './styles.css';

export default function PersonagemList({personagens}) { 
  return (
    <div className="personagensContainer">
      <div>
        {personagens.length > 0 &&
          personagens.map(item => (
            <PersonagemCard character={item} key={item.id} />
          ))}
      </div>
    </div>
  );
}
