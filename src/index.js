import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} exact />
        <Route component={NotFound} />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
  