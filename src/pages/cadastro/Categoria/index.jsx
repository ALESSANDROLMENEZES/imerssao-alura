import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

export default props => {
  const valorInicial = {
    nome: '',
    descricao: '',
    cor: ''
  };
  
  const [categoria, setCategoria] = useState(valorInicial);
  const [categorias, setCategorias] = useState([]);
  
  const setValues = (chave, value) => {
    setCategoria({
      ...categoria,
      [chave]: value
    });
  };
  
  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>
    
      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([categoria, ...categorias]);
        setCategoria(valorInicial)
      }} style={{ backgroundColor: categoria.cor }}>
    
    
        <FormField
          type='text'
          label='Nome'
          name='nome'
          value={categoria.nome}
          onChange={(e) => setValues(e.target.name, e.target.value)}
        />
    
        <div>
          <label>Descrição:
            <textarea
              name='descricao'
              value={categoria.descricao}
              onChange={(e) => setValues(e.target.name, e.target.value)}
            />
          </label>
        </div>
    
        <FormField
          type='color'
          label='Cor'
          name='cor'
          value={categoria.cor}
          onChange={(e) => setValues(e.target.name, e.target.value)}
        />
    
        <button>Cadastrar</button>
      </form>
    
      <ul>
        {categorias.map((categ, index) => <li key={index}>{categ.nome}</li>)}
      </ul>
    
      <Link to="/">Ir para Home</Link>
    </PageDefault>
  )
};