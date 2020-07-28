import React from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';

export default props => (
  <PageDefault>
    <h1>Página de cadastro de vídeo</h1>
    <Link to="/cadastro/categoria"></Link>
  </PageDefault>
);