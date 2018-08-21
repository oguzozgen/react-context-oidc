import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthenticationProvider } from 'react-context-oidc';
import Header from './Layout/Header';
import Routes from './Router';
import oidcConfiguration from './configuration';

const origin = document.location.origin;

const App = () => (
  <div>
    <Router>
      <AuthenticationProvider configuration={oidcConfiguration} loggerLevel={4}>
        <Header />
        <Routes />
      </AuthenticationProvider>
    </Router>
  </div>
);

render(<App />, document.getElementById('root'));
