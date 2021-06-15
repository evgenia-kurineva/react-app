import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Textbook from './pages/Textbook/Textbook';
import NotFound from './pages/NotFound/NotFound';
import './App.scss';

const App = (): JSX.Element => (
  <div className="App">
    <Background>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/textbook" component={Textbook} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </Background>
  </div>
);

export default App;
