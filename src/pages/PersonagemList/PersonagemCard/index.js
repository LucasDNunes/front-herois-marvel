import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

export default function PersonagemCard({ character }) {
  const { id, name, thumbnail } = character;
  const imageSrc = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className="personagemContainer">
      <Link className="link" to={`/detalhes/${id}`}>
          <img className="personagemImg" src={imageSrc} alt={name} />
          <p>{name}</p>
      </Link>
    </div>
  );
}
