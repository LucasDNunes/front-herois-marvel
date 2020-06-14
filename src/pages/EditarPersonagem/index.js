import React, { useState, useEffect } from 'react';
import { MdSave } from 'react-icons/md';
import PropTypes from 'prop-types';

import api from '../../services/api.js';
import { Container, Header, Content, FormEdit, InputText } from './styles';



export default function EditarPersonagem({ match, history }) {
  const { id } = match.params;
  const [personagem, setPersonagem] = useState([]);
  useEffect(() =>{
    async function carregarPersonagem(){
      const response =  await api.get(`/v1/public/characters/${id}`);
      const {results} = response.data.data;
      setPersonagem(results);
    }
    carregarPersonagem();
  }, [id]);

  function handleSubmit(data) {
    personagem.name = data.name;
    personagem.description = data.description;
    // dispatch(editCharacter(personagem));
    history.push(`/detalhes/${id}`);
  }

  return (
    <Container>
      <Header>
        <h1>Editar Personagem</h1>
      </Header>
      {personagem.map(p =>{
        return (
          <Content key={p.id}>
            <img 
            src={p.thumbnail.path + '.' + p.thumbnail.extension}  
            alt={p.name} 
            />
            <FormEdit
              data-testid="form"
              initialData={p}
              onSubmit={handleSubmit}
            >
              <InputText name="name" className="name" />
              <InputText
                data-testid="description"
                name="description"
                className="description"
                multiline
              />
              <button type="submit">
                <MdSave size={30} color="#fff" />
                Save
              </button>
            </FormEdit>
          </Content>
        )
      })}
    </Container>
  );
}

EditarPersonagem.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};