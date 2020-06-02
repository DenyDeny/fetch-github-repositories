import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Context
import AppProvider from '../routes/context';

// Routes
import Home from '../routes/Home';
import Repo from '../routes/Repo/Repo';

// Styles
import './App.css';


function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/repo/:repoId" component={Repo} />
      </Switch>
    </AppProvider>
  )
}

export default App;
