import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import PersongaemDetalhes from './pages/PersonagemDetalhes';
import EditarPersonagem from './pages/EditarPersonagem';

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/detalhes/:id" exact component={PersongaemDetalhes}/>
            <Route path="/detalhes/:id/editar" exact component={EditarPersonagem}/>
        </Switch>
    );
}